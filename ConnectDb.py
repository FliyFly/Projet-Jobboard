import pymysql.cursors


class ConnectDb:

    def __init__(self):
        self.connection = pymysql.connect(host='localhost',
                                          user='root',
                                          password='',
                                          db='jobboard',
                                          charset='utf8mb4',
                                          cursorclass=pymysql.cursors.DictCursor)

    def connect(self):
        cursor = self.connection.cursor()
        return cursor

    def commit(self):
        commit = self.connection.commit()
        return commit

    def disconnect(self):
        close = self.connection.close()
        return close
