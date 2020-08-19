import pymysql
import json
import datetime
from datetime import date
# Configuration values
endpoint = 'carnivaldashboard.c3kz2zjpr06j.ap-south-1.rds.amazonaws.com'
username = 'admin'
password = 'carnival01'
database_name = 'carnivaldashboard'
dayDiff = 0

#conncection
connection = pymysql.connect(endpoint, user=username,passwd = password, db = database_name)
cursor = connection.cursor()

def lambda_handler(event, context):
    dayDiff = 0
    for day,shift in event.items():
        Next_Date = datetime.datetime.today() + datetime.timedelta(days=dayDiff)
        Next_Date = Next_Date.strftime("%Y-%m-%d")
        print(str(Next_Date) + " --> " + str(shift))
        query = 'INSERT INTO carnivaldashboard.team_shift (date, shift_1, shift2,shift3,shift4) VALUES ("' + str(Next_Date) + '","' + str(shift[0]) + '","' + str(shift[1]) + '","' + str(shift[2]) + '","' + str(shift[3]) + '")'
        dayDiff = dayDiff+ 1
        cursor.execute(query)
        connection.commit()