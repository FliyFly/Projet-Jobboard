from Models.Model import Model


class Wages(Model):
    def __init__(self):
        super().__init__()

    def post_wage(self, wage):
        sql = "INSERT INTO wages (amount) VALUES (%s)"
        self.cursor.execute(sql, (wage))
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows

    def patch_wage(self, wage, id_wage):
        sql = "UPDATE wages SET amount=%s WHERE id=%s"
        self.cursor.execute(sql, (wage, id_wage))
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows