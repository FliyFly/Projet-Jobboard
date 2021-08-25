from Models.Model import Model


class Applications(Model):
    def __init__(self):
        super().__init__()


    def post_application(self, id_user, id_advertisement, id_email):
        sql = "INSERT INTO applications (id_user, id_advertisement, id_email, apply_date) VALUES (%s, %s, %s, NOW())"
        self.cursor.execute(sql, (id_user, id_advertisement, id_email))
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows