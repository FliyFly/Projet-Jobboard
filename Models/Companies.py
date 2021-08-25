from Models.Model import Model


class Companies(Model):
    def __init__(self):
        super().__init__()


    def post_companie(self, nameCompanie, about, linkedin_link, twitter_link, website_link, id_domain):
        sql = "INSERT INTO companies (name, about, linkedin_link, twitter_link, website_link, id_domain) VALUES (%s, %s, %s, %s, %s, %s)"
        self.cursor.execute(sql, (nameCompanie, about, linkedin_link, twitter_link, website_link, id_domain))
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows

    def patch_company(self, nameCompanie, about, linkedin_link, twitter_link, website_link, id_domain, id_company):
        sql = "UPDATE companies SET name=%s, about=%s, linkedin_link=%s, twitter_link=%s, website_link=%s, id_domain=%s WHERE id=%s"
        self.cursor.execute(sql, (nameCompanie, about, linkedin_link, twitter_link, website_link, id_domain, id_company))
        self.db.commit()
        rows = self.cursor.fetchall()
        return rows



