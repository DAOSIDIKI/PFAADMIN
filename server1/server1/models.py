from django.db import models
class Utilisateur(models.Model):
    CNE=models.AutoField(primary_key=True)
    nom=models.CharField(max_length=100)
    prenom=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    ville=models.CharField(max_length=100)
    tel=models.CharField(max_length=100)
    def __str__(self):
        return self.nom or ''
