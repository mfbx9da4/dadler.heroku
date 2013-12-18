from django.shortcuts import render
from django.shortcuts import render
from django.template import RequestContext
from django.template.response import TemplateResponse
from django.core.context_processors import csrf
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, HttpResponseRedirect
from django.conf import settings



def home(request):
    context = RequestContext(request)
    return TemplateResponse(request, 'index.html', context)

def list_static(request):
	return HttpResponse(settings['STATICFILES_DIRS'], content_type='text')