#ROOT URL PAGE
from django.conf.urls import url, include
from django.contrib import admin
from . import views

#TEMPORARY STATIC FILE HOSTING
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    
#   articles url
    url(r'^articles/', include('articles.urls')),

#   about page
    url(r'^about/$', views.about),
    
#   home page
    url(r'^$', views.homepage),
]

#TEMPORARY STATIC FILE HOSTING
urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)