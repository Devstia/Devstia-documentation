# Devstia Personal Web
Devstia Personal Web is a native destop application that bootstaps a private, powerful, web server stack and control panel that runs locally on your Mac or Windows PC. 

## Requirements
By default, the application will reproduce a web server stack utilizing a 2 core system with 2 gigabytes of system RAM. It is therefore recommended that your personal computer should have these specifications as an absolute minimum. For Windows PC users, the minimum operating system version is Windows 8 and hardware should be an Intel compatible CPI with Hyper-V support. Apple Macintosh users should take care to install the correct application binary that matches their physical hardware architecture; both macOS for Intel or macOS for Apple Silicon (M1 or better) are supported. 

|                      | Minimum                                 | Recommended      |
| -------------------- | --------------------------------------- | ---------------- |
| **CPU**              | 2 core, 64-bit                          | 4 cores          |
| **Memory**           | 2 GB                                    | 4 GB             |
| **Disk**             | 10 GB HDD                               | 40 GB SSD        |
| **Operating System** | Windows 8 or macOS 10.13 (High Sierra)  | Current Windows 11 or macOS 13 (Sonoma) |

## Installation
Installation of Devstia Personal Web edition is simple: just download and run the installer for Windows or drag the app icon to your Application folder on Mac. Use the download link corresponding to your operating system and hardware architecture using the table below:

|  Operating System / CPU Architecture.           | Download Link                   |
| ----------------------------------------------- | ------------------------------- |
| macOS - Apple Silicon (M1, M2, or M3 processor) | [Devstia-Apple-Silicon.zip](https://github.com/Devstia/devstia-app/releases/download/v1.0.2/Devstia-Apple-Silicon.zip)|
| macOS - Intel 64-bit                            | [Devstia-Apple-Intel.zip](https://github.com/Devstia/devstia-app/releases/download/v1.0.2/Devstia-Apple-Intel.zip)|
| Windows - Intel or AMD (x86-64 processor)       | [Devstia-Windows-x64.zip](https://github.com/Devstia/devstia-app/releases/download/v1.0.2/Devstia-Apple-Intel.zip)|

### Install on Macintosh
1) Unzip the downloaded zip file (by default, Safari may automatically unzip the file). 
2) Drag the application icon to your Applications folder.

### Install on Windows
1) Unzip the downloaded zip file.
2) Run (double click) the Devstia Setup icon to run the application installer.
3) A trusted blue Microsoft Defender screen, click "More Info" followed by "Run anyway".

::: tip Enable Hyper-V on Windows
Devstia for Windows will warn users if they do not have Hyper-V installed and enabled. Hyper-V allows Devstia to communicate instructions directly to your microprocessor to accelerate performance. To enable Hyper-V:
1) Click the Start button and type "Turn Windows Features on or off".
2) Check the Hyper-V option and click OK; your computer may need to reboot.
:::

Devstia uses QEMU and users may be prompted to allow access when launching for the first time. Click "Allow access" to enable services on networks you wish to access web services (i.e. private network for testing websites on your other computers and mobile devices, iPhone, etc.) 


## App User Interface
The first time you run the Devstia application it will begin downloading a 'snapshot' runtime file optimized for your microprocessor architecture. This process will only need to take place once. Please keep the application window open and wait for the download to complete; closing the window prematurely will require re-download.

After initial download, the Devstia Settings window will appear. This window will also show upon starting Devstia from its application icon. Closing the window will keep Devstia running in the background. You can access the Settings window via right-clicking the lower right Devstia system tray icon in Windows or clicking the upper right Devstia system menu on Macintosh.




## Master Certificate
The master certificate will need to be installed in order to access the control panel and view websites in your web browser. Trusting the master certificate will prevent any SSL connection warnings and allow uninhibited website design and development. 

### Trusting the Certificate on Macintosh
To trust the certificate on Macintosh for use with the Safari browser:

1) Open the Devstia Settings window and click "Security" tab, followed by the "Show Master Certificate" button.
2) A Finder window will open showing the dev.pw.crt file; double click the file to open the Keychain Access app.
3) In the Keychain Access app, enter 'dev.pw' into the search box and select 'All Items'.


### Trusting the Certificate on Windows
To trust the certificate in Windows for use with the Edge browser:

1) Open the Devstia Settings window and click "Security" tab, followed by the "Show Master Certificate" button.
2) An Explorer window will open showing

### Trusting the Certificate in Firefox
Firefox has its own settings panel for managing certificates. From the 

## Resources
The resources section of the Devstia Settings panel allows you to adjust the RAM (in gigabytes) and number of CPU cores allocated to the web server. By default, Devstia starts up with 2 cores and 2 gigabytes of memory but you may adjust these settings to meet your needs. However, please note that is not advised to allocate more resources than your physical hardware has. It is possible to increase these numbers to match your actual hardware but this may inhibit your ability to multitask. 

For example, a 2017 Dual Core Macbook Pro featuring hyperthreading, reports 4 functional cores and 16 gigabytes of RAM. The default settings for Devstia to run side-by-side with Adobe Photoshop and the Chrome browser (known for consuming lots of memory) would be a good fit. One could safely increase the Devstia Resources settings to include 4 or 8 gigabytes of RAM and still have enough to run additional applications. Moving beyond that may make other applications less responsive. 

Use the 'Save' button to record your desired CPU and RAM settings; followed by clicking the 'Restart Server' button to have the changes take effect.

## Snapshots

## Terminal
Devstia Personal Web native application includes easy access to the internal Linux Debian command line via the SSH protocol.  

### SSH Keys

## File System

## Devstia Password

## DNS Proxy
Devstia Personal Web contains a built in DNS proxy within the native app. You can turn on the proxy from the Security tab on the Settings panel.  

## Uninstall
Uninstallation is easy. You will want to remove the application binaries and corresponding runtime data files. The data files include the base system snapshot and is fairly large; delete them to free space and to remove all traces of Devstia Personal Web edition.

### Uninstall on Macintosh
1) Drag the Devstia application icon in the Applications folder to the trash.
2) Using Finder, click the **Go** pull down menu *while holding the option key* and select **[Library](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://support.apple.com/guide/mac-help/go-directly-to-a-specific-folder-on-mac-mchlp1236/mac%23:~:text%3DTip%253A%2520To%2520go%2520to%2520your,Option%2520key%252C%2520then%2520choose%2520Library.&ved=2ahUKEwiVsLzUrv2HAxVJADQIHUOjIxIQFnoECBkQAw&usg=AOvVaw1AfeUARI-tID9k2P9CfMy4)**.
3) Within the @virtuosoft folder, drag the devstia-app subfolder to the trash. You may remove @virtuosoft folder too if the folder is empty.

### Uninstall on Windows
1) Click the start menu and type "Add or Remove Programs"
2) Type Devstia in the search box and run the uninstaller.
3) Using File Explorer ([with Hidden Files turned on](https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5#WindowsVersion=Windows_10)), open the folder path C:\Users\[username]\AppData\, where C:\ is your main hard drive letter and [username] is your Windows username.
4) Delete the following subfolder:
  - `\Local\@virtuosoft\devstia-app`
  - `\Roaming\@virtuosoft\devstia-app`

