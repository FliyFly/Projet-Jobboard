from Models.Model import Model


class Sectors(Model):
    def __init__(self):
        super().__init__()


    def post_sector(self, sector):
        sql = "INSERT INTO sectors (name) VALUES (%s)"
        self.cursor.execute(sql, (sector))
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows

    def patch_sector(self, sector, id_sector):
        sql = "UPDATE sectors SET name=%s WHERE id=%s"
        self.cursor.execute(sql, (sector, id_sector))
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows