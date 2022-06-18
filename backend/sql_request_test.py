# Organization of the data
# Data collected
# age (Age)
# tech_lvl, (Proficiency with technology on a scale of 1 - 10) TBD
# t_wo, (Time engaged with app before creating an outfit without AI in SECONDS)
# t_w, (Time engaged with app before creating an outfit with AI in SECONDS)
# n_wo, (Number of interactions creating an outfit without AI)
# n_w, (Number of interactions creating an outfit with AI)
# rank_wo, (Quality of outfit selection without AI 0 - 100) TBD
# rank_w, (Quality of outfit selection without AI 0 - 100) TBD

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
    
    print(insp.has_table("user_data"))

    if (insp.has_table("user_data") != True):
        try: 
            conn.execute(text("CREATE TABLE user_data (age int, tech_lvl int, t_wo int, t_w int, n_wo int, n_w int, rank_wo int, rank_w int)"))
            return 'Table created'

        except exc.SQLAlchemyError as error:
            return 'Failed to create table {}'.format(error)

        finally:
            conn.close()
            engine.dispose()

def insert_data(): 

    URI = connection_uri()
    conn = None
    try: 
        engine = create_engine(URI, echo=False)
        conn = engine.connect()
    
        conn.execute(
            text("INSERT INTO user_data (age, tech_lvl, t_wo, t_w, n_wo, n_w, rank_wo, rank_w) VALUES (:age, :tech_lvl, :t_wo, :t_w, :n_wo, :n_w, :rank_wo, :rank_w)"), 
            [{"age": 22, "tech_lvl": 1, "t_wo": 300, "t_w": 100, "n_wo": 100, "n_w": 30, "rank_wo": 80, "rank_w": 85}]
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

        result = conn.execute(text("SELECT age, tech_lvl FROM user_data"))
        resultArray = {}

        i = 0 
        for row in result:
            resultArray[i] = (f"age: {row.age}  tech_lvl: {row.tech_lvl}")
            #print(resultArray[i])

        return resultArray
    
    except exc.SQLAlchemyError as err:
        return 'Failed {}. Exception: {}'.format("error", err)

    finally:
        conn.close()
        engine.dispose()

def data(): 
    testArray = [1, 2, 3, 4, 5]
    
#test
#print(create_data_table())
#print(insert_data())
#print(test_data())