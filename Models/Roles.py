from Models.Model import Model


class Roles(Model):
    def __init__(self):
        super().__init__()


    def post_role(self, role):
        sql = "INSERT INTO roles (name) VALUES (%s)"
        self.cursor.execute(sql, (role))
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows

    def patch_role(self, role, id_role):
        sql = "UPDATE roles SET name=%s WHERE id=%s"
        self.cursor.execute(sql, (role, id_role))
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows