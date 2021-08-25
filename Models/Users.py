from Models.Model import Model


class Users(Model):
    def __init__(self):
        super().__init__()

    def post_user(self, first_name, last_name, email, birthday, gender, id_company, phone, token, id_role, password):
        sql = "INSERT INTO users (first_name, last_name, email, birthday, gender, id_companie, phone, token, id_role, password) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        self.cursor.execute(sql, (first_name, last_name, email, birthday, gender, id_company, phone, token, id_role, password))
        self.db.commit()
        rows = self.cursor.lastrowid
        return rows

    def get_by_email(self, email):
        sql = "SELECT * FROM users WHERE email=%s"
        self.cursor.execute(sql, email)
        rows = self.cursor.fetchone()
        return rows

    def patch_user(self, first_name, last_name, email, birthday, gender, phone, password, id_user):
        sql = "UPDATE users SET first_name=%s, last_name=%s, email=%s, birthday=%s, gender=%s, phone=%s, password=%s WHERE id=%s"
        self.cursor.execute(sql, (first_name, last_name, email, birthday, gender, phone, password, id_user))
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows