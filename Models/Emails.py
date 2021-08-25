from Models.Model import Model


class Emails(Model):
    def __init__(self):
        super().__init__()

    def post_email(self, obj, content, resume, letter):
        sql = "INSERT INTO emails (object, content, resume, letter, send_date) VALUES (%s, %s, %s, %s, NOW())"
        self.cursor.execute(sql, (obj, content, resume, letter))
        self.db.commit()
        rows = self.cursor.lastrowid
        return rows


    def patch_email(self, obj, content, resume, letter, id_email):
        sql = "UPDATE emails SET object=%s, content=%s, resume=%s, letter=%s WHERE id=%s"
        self.cursor.execute(sql, (obj, content, resume, letter, id_email))
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows