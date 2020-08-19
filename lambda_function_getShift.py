import pymysql
import json
from datetime import date
# Configuration values
endpoint = 'carnivaldashboard.c3kz2zjpr06j.ap-south-1.rds.amazonaws.com'
username = 'admin'
password = 'carnival01'
database_name = 'carnivaldashboard'

#conncection

connection = pymysql.connect(endpoint, user=username,passwd = password, db = database_name)
def lambda_handler(event, context):
    # TODO implement
    cursor = connection.cursor();
    today = date.today()
    print("Today's date:", today)
    print(today.strftime("%Y-%m-%d"))
    query = 'SELECT * from team_shift where date = "' + today.strftime("%Y-%m-%d") + '"'
    #query = 'SELECT * from team_shift'
    cursor.execute(query)
    r = cursor.fetchall()
    y = json.dumps(r)
    final_dictionary = json.loads(y)
    return{
        'body': final_dictionary
    }
    