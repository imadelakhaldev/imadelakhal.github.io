# pip install selenium
# Web browser scraping and automation.
from selenium import webdriver

# Managing Chrome options on Chrome windows.
from selenium.webdriver.firefox.options import Options as FireFoxOptions

# Implicit time wait
import time


class Mza7aStreamBooster:
    def __init__(self):
        print("######### STARTING Mza7aStreamBooster #########")
        try:
            self.firefox_options = FireFoxOptions()
            self.firefox_options.add_argument("--headless")
            print("Session started successfully.")
        except Exception as ex:
            print("Unable to initialize Mza7aStreamBooster.")
            print(ex)

    def boost_views(self, qty, slp=4):
        try:
            for i in range(qty):
                print("Started view boost session " + str(i))
                driver = webdriver.Firefox(executable_path="./chromedriver_osx", options=self.firefox_options)
                driver.get("https://www.nimo.tv/lmzaa7aa")
                time.sleep(slp)
                driver.find_element_by_class_name("play").click()
                print("Finished view boost session " + str(i))
        except Exception as ex:
            print("Unable to boost views.")
            print(ex)


bot = Mza7aStreamBooster()
bot.boost_views(10)

# If you PC and internet connection are optimal, this script will load and run a session in about 6 seconds.
# Which means 3600 / 6 = 600 view per Hour.
# If not, this script will load a session in about 8 seconds. Which means 450 view per Hour.

# For local usage, install Selenium (Python package), adjust the "qty" parameter in "boost_views" method
# for how much view you want. If you had any problems while running the script, pass another parameter to the method
# to adjust wait time between sessions.

# For server usage, use a virtual machine or a VPS, install Selenium, and run the script!

# to-do: Add follow booster (Bots that automatically create Nimo account and follow Mza7a.)
#        Add comment booster (Bots that automatically comment with random phrases to Mza7a.)
