#alchemy engine
from flask_sqlalchemy import SQLAlchemy, connection_uri, create_engine, exc

def create_history_table():
    '''
        Function used to create an SQL table for inserting our
        calculations into. We are using SQLAlchemy's DB engine
        for executing our created query.
    :return:
    '''

    URI = connection_uri()
    my_connection = None
    TABLE_NAME = "calculations"

    CREATE_TABLE_QUERY = """
                    CREATE TABLE IF NOT EXISTS {} (
                        first_operand INT NOT NULL,
                        second_operand INT NOT NULL,
                        answer INT NOT NULL,
                        PRIMARY KEY(first_operand, second_operand)
                    )""".format(TABLE_NAME)
    
    try:
        engine = create_engine(URI, echo=False)
        my_connection = engine.connect()
        my_connection.execute(CREATE_TABLE_QUERY)

        return "Table created successfully"

    except exc.SQLAlchemyError as error:
        return 'Error trying to create table: {}'.format(error)

    finally:
        my_connection.close()
        engine.dispose()

def insert_calculation(firstNum, secondNum, answer):
    '''
    Function used to insert our calculation into the DB.
    :param firstNum: first operand of calculation
    :param secondNum: second operand of calculation
    :param answer: calculation answer
    :return: error or success strings for inserting into DB.
    '''
    URI = connection_uri()
    my_connection = None

    try:
        engine = create_engine(URI, echo=True)
        my_connection = engine.connect()

        my_connection.execute('INSERT INTO calculations VALUES (%s, %s, %s)', (firstNum, secondNum, answer))
        return "Insertion successful"

    except exc.SQLAlchemyError as err:
        return 'Error occured inserting into table {}. Exception: {}'.format("calculations", err)

    finally:
        my_connection.close()
        engine.dispose()