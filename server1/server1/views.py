from server1 import serialize
from server1.models import Utilisateur
from server1.serialize import DetailsSerializers
from rest_framework.views import APIView
from rest_framework.response import Response

# Pour la creation et l'affichage des utilisateurs

class DetailsTable(APIView):
    def get(self,request):
        detailsObject=Utilisateur.objects.all()
        dSerializeObject=DetailsSerializers(detailsObject,many=True)
        return Response(dSerializeObject.data)
    def post(self,request):
        serializeObject=DetailsSerializers(data=request.data)
        if serializeObject.is_valid():
            serializeObject.save()
            return Response(200)
        return Response(serializeObject.errors)
    
# Pour les mises a jour des utilisateurs

class DetailsUpdate(APIView):
    def put(self,request,pk):
        try:
            detailObject=Utilisateur.objects.get(pk=pk)
        except:
            return Response("User not found in the database")
        
        serializeObject=DetailsSerializers(detailObject, data=request.data)
        if serializeObject.is_valid():
            serializeObject.save()
            return Response(200)
        return Response(serializeObject.errors)
    
# Suppression d'utilisateur

class DetailsDelete(APIView):
    def delete(self,request,pk):
        try:
            detailObject=Utilisateur.objects.get(pk=pk)
        except:
            return Response("User not found in the database")
        
        detailObject.delete()
        return Response(200)
    def get(self,request,pk):
        try:
            detailObject=Utilisateur.objects.get(pk=pk)
        except:
            return Response("User not found")
        return Response(DetailsSerializers(detailObject).data)
class CustomizedSearch(APIView):
    def post(self,request):
        nom=request.data["nom"]
        prenom=request.data["prenom"]
        ville=request.data["ville"]
        cne=request.data["CNE"]
        filters = {}

        if nom:
            filters["nom__icontains"] = nom

        if prenom:
            filters["prenom__icontains"] = prenom

        if ville:
            filters["ville__icontains"] = ville

        if cne:
            filters["CNE__iexact"] = cne

        valeurs = Utilisateur.objects.filter(**filters)
        return Response(DetailsSerializers(valeurs,many=True).data)


