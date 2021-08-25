from Models.Model import Model


class Advertisements(Model):
    def __init__(self):
        super().__init__()

    def post_advertisements(self, title, about, job_description, localisation, contract_type, id_wage, id_companie, id_sector):
        sql = "INSERT INTO advertisements (title, about, job_description, localisation, contract_type, id_wage, id_companie, id_sector) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
        self.cursor.execute(sql, (title, about, job_description, localisation, contract_type, id_wage, id_companie, id_sector))
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows


    def patch_advertisements(self, title, about, job_description, localisation, contract_type, id_wage, id_companie, id_sector, id_advertisement):
        sql = "UPDATE advertisements SET title=%s, about=%s, job_description=%s, localisation=%s, contract_type=%s, id_wage=%s, id_companie=%s, id_sector=%s WHERE id=%s"
        self.cursor.execute(sql, (title, about, job_description, localisation, contract_type, id_wage, id_companie, id_sector, id_advertisement))
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows

    def get_advertisements(self):
        sql = "SELECT * FROM advertisements INNER JOIN sectors ON sectors.id = advertisements.id_sector INNER JOIN companies ON companies.id = advertisements.id_companie INNER JOIN wages ON wages.id = advertisements.id_wage"
        self.cursor.execute(sql)
        rows = self.cursor.fetchall()
        return rows