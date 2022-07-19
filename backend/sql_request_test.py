from configparser import ConfigParser
from sqlalchemy import create_engine, exc, text, inspect
import os

def read_config():
    '''
        Instantiating a config file reader for our use case.
        To be used to read credentials for connecting to PSQL
        DB hosted in GCP SQL.
    :return: ConfigParser
    '''

    current_dir = os.path.dirname(__file__)
    file_path = os.path.join(current_dir, '../config.ini')

    config = ConfigParser()
    config.read(file_path)

    return config

def connection_uri():
    '''
        Creating connection URI for connecting to PSQL DB. URI will
        be used to create SQLAlchemy engine for executing queries.
        :return: URI for our PSQL DB hosted in GCP SQL
    '''
    config = read_config()

    URI = 'postgresql+psycopg2://{}:{}@/{}?host={}'.format(
        config['history_database']['user'],
        config['history_database']['password'],
        config['history_database']['dbname'],
        config['history_database']['host']
    )

    return URI    

def create_data_table(): 
    URI = connection_uri()
    conn = None

    engine = create_engine(URI, echo=False)
    insp = inspect(engine)
    conn = engine.connect()
    
    print(insp.has_table("condition_table"))

    if (insp.has_table("condition_table") != True):
        try: 
            conn.execute(text("CREATE TABLE condition_table (condition INT, url TEXT, session_id INT, time TIMESTAMP)"))
            return 'Table created'

        except exc.SQLAlchemyError as error:
            return 'Failed to create table {}'.format(error)

        finally:
            conn.close()
            engine.dispose()
    else: 
        print('table already exists') 


def insert_data(): 

    URI = connection_uri()
    conn = None
    try: 
        engine = create_engine(URI, echo=False)
        conn = engine.connect()
    
        conn.execute(
            text("INSERT INTO condition_table (condition, url, session_id, time) VALUES (:condition, :url, :session_id, :time)"), 
            [{"condition": 1, "url": "https://google.com", "session_id": 1, "time": "1999-01-08 04:05:06"}]
        )

        conn.execute(
            text("INSERT INTO condition_table (condition, url, session_id, time) VALUES (:condition, :url, :session_id, :time)"), 
            [{"condition": 2, "url": "https://google.com/2", "session_id": 2, "time": "2000-01-08 04:05:06"}]
        )

        return "Insertion successful"
    
    except exc.SQLAlchemyError as err:
        return 'Error occured inserting into table {}. Exception: {}'.format("Values", err)

    finally:
        conn.close()
        engine.dispose()

def test_data(): 
    URI = connection_uri()
    conn = None
    try: 
        engine = create_engine(URI, echo=False)
        conn = engine.connect()

        result = conn.execute(text("SELECT condition, url, session_id, time FROM condition_table"))
        resultArray = {}

        i = 0 
        for row in result:
            resultArray[i] = (row['condition'],row['url'], row['session_id'], row['time'])
            #print(resultArray[i])

        return resultArray
    
    except exc.SQLAlchemyError as err:
        return 'Failed {}. Exception: {}'.format("error", err)

    finally:
        conn.close()
        engine.dispose()
    
#test
#print(create_data_table())
#print(insert_data())
#print(test_data())