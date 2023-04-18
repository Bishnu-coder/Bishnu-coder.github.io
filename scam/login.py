import webbrowser
import pyautogui
import time
class do_login:
    def __init__(self):
        self.url='https://www.facebook.com/'
        self.file="data.txt"
        self.u_n=None
        self.p=None
    def set_values(self):
        with open('data.txt',"r") as data:
            ac_data=data.read()
            self.u_n=ac_data.split(',')[0]
            self.p=ac_data.split(',')[1]
    def open_browser(self):
        webbrowser.register('chrome',
            None,
            webbrowser.BackgroundBrowser("C://Program Files//Google//Chrome//Application//chrome.exe"))
        webbrowser.get('chrome').open(self.url)
    def actual_login(self):
        pyautogui.write(self.u_n)
        time.sleep(0.5)
        pyautogui.click(710,270)
        pyautogui.write(self.p)
        pyautogui.press("enter")
login=do_login()
login.set_values()
login.open_browser()
time.sleep(2)
login.actual_login()

