from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from PIL import ImageOps, Image

driver =  webdriver.Chrome(ChromeDriverManager().install())
driver.get('https://play.google.com/store/apps/details?id=com.facebook.lite')

driver.fullscreen_window()
driver.save_screenshot('screenshot.png')

# ((left, upper, right, lower))

size = (260, 400, 910, 720)
captura = Image.open('screenshot.png')
imagen_cortada = captura.crop(size)

imagen_cortada.save('/home/nelson/Escritorio/horchatatube/frontend/src/imagenes/imagen-cortada.png')

driver.close()