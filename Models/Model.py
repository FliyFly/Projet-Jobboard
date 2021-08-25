from ConnectDb import ConnectDb


class Model:
    def __init__(self):
        self.db = ConnectDb()
        self.cursor = self.db.connect()

    def get_all(self):
        sql = "SELECT * FROM {}".format(type(self).__name__.lower())
        self.cursor.execute(sql)
        rows = self.cursor.fetchall()
        return rows

    def get_by_id(self, id):
        sql = "SELECT * FROM {} WHERE id={}".format(type(self).__name__.lower(), id)
        self.cursor.execute(sql)
        rows = self.cursor.fetchone()
        return rows

    def delete_by_id(self, id):
        sql = "DELETE FROM {} WHERE id={}".format(type(self).__name__.lower(), id)
        self.cursor.execute(sql)
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows

    def __del__(self):
        self.db.disconnect()
