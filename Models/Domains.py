from Models.Model import Model


class Domains(Model):
    def __init__(self):
        super().__init__()

    def post_domain(self, domain):
        sql = "INSERT INTO domains (name) VALUES (%s)"
        self.cursor.execute(sql, (domain))
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows

    def patch_domain(self, domain, id_domain):
        sql = "UPDATE domains SET name=%s WHERE id=%s"
        self.cursor.execute(sql, (domain, id_domain))
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows

