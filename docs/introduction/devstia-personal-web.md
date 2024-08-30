# Devstia Personal Web
Devstia Personal Web is a native desktop application that bootstaps a private, powerful, web server stack and localhost control panel that runs locally on your Mac or Windows PC. 

## Requirements
By default, the application will reproduce a web server stack utilizing a 2 core system with 2 gigabytes RAM. It is therefore recommended that your personal computer hardware should have these specifications as a minimum. For Windows users, the minimum operating system version is Windows 8 and hardware should be an Intel compatible CPU with Hyper-V support. Apple Macintosh users should take care to install the correct application binary that matches their physical hardware architecture; both macOS for Intel and macOS for Apple Silicon (M1 or newer) are supported. 

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

<img src="/images/drag-devstia-app.png" alt="Drag Devstia app to Applications folder" width="250" />

### Install on Windows
1) Unzip the downloaded zip file.
2) Run (double click) the Devstia PW Setup icon to run the application installer.
3) A trusted blue Microsoft Defender screen may appear, click "More Info" followed by "Run anyway".

<img src="/images/dev-pw-setup-icon.png" alt="Devstia Setup Icon" width="100" />


::: tip Enable Hyper-V on Windows
Devstia for Windows will warn users if they do not have Hyper-V installed and enabled. Hyper-V allows Devstia to communicate instructions directly to your microprocessor to accelerate performance. To enable Hyper-V:
1) Click the Start button and type "Turn Windows Features on or off".
2) Check the Hyper-V option and click OK; your computer may need to reboot.

![Enable Hyper-V](/images/enable-hyper-v.jpg)
:::

Devstia uses QEMU and users may be prompted to allow access when launching for the first time. Click "Allow access" to enable services on networks you wish to access web services (i.e. private network for testing websites on your other computers and mobile devices, iPhone, etc.) 


## App User Interface
The first time you run the Devstia application it will begin downloading a 'snapshot' runtime file optimized for your microprocessor architecture. This process will only need to take place once. Please keep the application window open and wait for the download to complete; closing the window prematurely will require re-download.

After initial download, the Devstia Settings window will appear. This window will also appear when starting Devstia from its application icon. The window displays two significant tabs for the user to note; "System" and "Security".

![Devstia System and Security tabs](/images/devstia-app-ui.png)

::: tip User Interface Reference
The System & Security tabs contain the following noteworthy (*) sections and controls. Follow the links in the corresponding table for more detailed information:

| System tab | Security tab |
| -- | -- |
| * [Status](#status) | * [SSL Certificates](#master-certificate)  |
| * [Resources](#resources) | &nbsp;&nbsp;&nbsp;&nbsp; - [Show Master Certificate](#master-certificate) |
| * [Snapshots](#snapshots) | &nbsp;&nbsp;&nbsp;&nbsp; - [Regenerate All Certificates](#master-certificate) |
| * [Actions](#actions) | * [Terminal / SSH Keys](#ssh-keys) |
| &nbsp;&nbsp;&nbsp;&nbsp; - [My Websites (localhost)](#localhost) | &nbsp;&nbsp;&nbsp;&nbsp; - [Show SSH Keys](#ssh-keys) |
| &nbsp;&nbsp;&nbsp;&nbsp; - [Terminal](#terminal) | &nbsp;&nbsp;&nbsp;&nbsp; - [Regenerate SSH Keys](#ssh-keys) |
| &nbsp;&nbsp;&nbsp;&nbsp; - [Files](#file-system) | * [Devstia Password](#devstia-password) |
| &nbsp;&nbsp;&nbsp;&nbsp; - [Restart Server](#actions) | * [LAN IP](#dns-proxy) |
| &nbsp;&nbsp;&nbsp;&nbsp; - [Quit & Stop Server](#actions) | &nbsp;&nbsp;&nbsp;&nbsp; - [DNS Proxy](#dns-proxy) |
:::

Closing the window will keep Devstia running in the background. You can access the Settings window via right-clicking the lower right Devstia system tray icon in Windows or clicking the upper right Devstia system menu on Macintosh.

![Devstia running in the background](/images/background-run.png)

## Master Certificate
The master certificate will need to be installed in order to access the localhost control panel and view websites in your web browser without seeing SSL warnings. Trusting the master certificate will prevent any SSL connection warnings and allow uninhibited website access that simulates live, production, websites. You will be able to visit the [http://localhost](#localhost) page and see sites you created with Devstia Personal Web with the fictitious **.dev.pw** TLD. The **.dev.pw** TLD will always point back to your localhost/computer running Devstia Personal Web edition.

### Trusting the Certificate on Macintosh
To trust the certificate on Macintosh for use with the Safari browser:

1) Open the Devstia Settings window and click the "Security" tab, followed by the "Show Master Certificate" button.
2) A Finder window will open showing the `dev.pw.crt` file; double click the file to open the Keychain Access app.
3) In the Keychain Access app's search box, enter 'dev.pw' and select 'All Items'.
4) Locate the **.dev.pw** certificate in the list box and double click it to open the certificate details. 
5) From the Trust section, change the **"When using this certificate"** combobox to the value **"Always Trust"** and close the window; you will be prompted for your Mac's credentials to save the setting.

![Certificate Trust on Mac](/images/devstia-cert-mac.jpg)

::: tip macOS Certificate Trusted Bug
The Keychain Access app has a bug that does not refresh the display and it may persist with the "This root certificate is not trusted" indicator. Closing and re-opening the Keychain Access app will reveal that it is trusted.
:::

### Trusting the Certificate on Windows
To trust the certificate on Windows for use with the Edge browser:

1) Open the Devstia Settings window and click the "Security" tab, followed by the "Show Master Certificate" button.
2) An Explorer window will open showing the `dev.pw.crt` file; double click the file to open the Certificate details window.
3) Click the "Install Certificate" button and "Certificate Import Wizard" will start; for "Store Location" you may select "Current user" then select the option to "Place all certificates in the following store".
4) For the "Certificate store" field, use the "Browse" button and select the item "Trusted Root Certification Authorities" followed by the "OK" button; answer "Yes" to confirm the installation.

![Certificate Import Wizard on Windows](/images/devstia-cert-windows.png)

You may need to quit the Microsoft Edge browser and restart it for changes to take effect. 

### Trusting the Certificate in Firefox
Firefox has its own settings panel for managing certificates. To install the master certificate in Firefox:

1) Open the Devstia Settings window and click the "Security" tab, followed by the "Show Master Certificate" button.
2) Note the location of the `dev.pw.crt` or copy the file to your Desktop or other easily accessible location.
3) In Firefox, click the hamburger menu and select "Settings", followed by scrolling to the section titled "Certificates" and click the "View Certificates" button.
4) Use the "Import" button and locate the `dev.pw.crt` file to import it.
5) Be sure to select the option boxes for "Trust this CA to identify websites" and "Trust this CA to identify email users" and click the "OK" button.

Firefox lists certificates by company name. The **dev.pw** certificate can be located by scrolling to the bottom of the list and looking for the name "Virtuosoft" should you need to remove it for updating. 

::: warning Remove any prior **.dev.pw** certificates
You should only have one instance of the **dev.pw** master certificate present. You will need to remove any prior **dev.pw** certificate(s) if you have an old one installed.

* On Macintosh use the "Keychain Access" app.
* On Windows type "Manage User Certificates" from the start menu.
:::

### Use the .dev.pw TLD
Each website your create using Devstia Personal Web should use the fictitious **.dev.pw** TLD. This special TLD can be used for development purposes and Devstia Personal Web will automatically create a self-signed SSL certificate that references the master certificate. With the master certificate trusted, it is not necessary to add the individual self-signed website certificates to your OS or browsers.

If you wish to replace the master certificate with a new one (i.e. due to expiration), use the "Regenerate All Certificates" button. This button will create a new master certificate *and* will regenerate all associated website self-signed certificates that trust the new master certificate. You will need to replace (read: remove and trust) your the new master certificate following the [directions outlined here](#master-certificate). 


## Actions
The main actions of the Devstia Personal Web application can be found on both the Settings window and via right-clicking the system tray icon (Windows) or clicking the system menu (Macintosh). These actions are summarized here:

> - **My Websites (localhost)** *Opens your default web browser and shows the web server control panel.*
> - **Terminal** *Opens an SSH terminal window with a bash command line as the devstia user.*
> - **Files** *Mounts a local hard drive for access to the Devstia web server file system.*
> - **Restart Server** *Restarts the Devstia web server.*
> - **Quit & Stop Server** *Stops the Devstia web server and exits the Devstia Personal Web application.*

## Localhost
The localhost page is where you will find the [QuickStart](/quickstart/about) web page; it is the main control panel for creating and working with your websites. With the Master Certificate trusted (from the section, [Master Certificate](#master-certificate) above), you can  visit the localhost page via the Devstia system menu icon (Macintosh), Devstia system tray menu icon (Windows) or the Devstia Settings window's System tab, and button labeled **"My Websites (localhost)"**. 

Login to the localhost page is automatic when you use the Devstia Personal Web native app's **My Websites (localhost)"** menu or button. You may also access the localhost page by simply visiting [http://localhost](http://localhost) in your web browser. Default login credentials are as follows:

* Username: devstia
* Password: personalweb

::: tip Localhost Password
You can change the devstia password for the Localhost page via the native app. See [Devstia Password](#devstia-password) section for more details.
:::

## Status
The Devstia Personal Web app has a status indicator that displays the status of services that are running. The listed services will appear green when they are active and working. Please note that the "Security" tab and revelent controls may not be enabled until all services are online and available (with a green indicator).

## Resources
The "Resources" section of the Devstia Settings panel allows you to adjust the RAM (in gigabytes) and number of CPU cores allocated to the web server. By default, Devstia starts up with 2 cores and 2 gigabytes of memory but you may adjust these settings to meet your needs. However, please note that is not advised to allocate more resources than your physical hardware has. It is possible to increase these numbers to match your actual hardware but this may inhibit your ability to multitask. 

For example, a 2017 Dual Core Macbook Pro featuring hyper-threading, reports 4 functional cores and 16 gigabytes of RAM. The default settings for Devstia to run side-by-side with Adobe Photoshop and the Chrome browser (known for consuming lots of memory) would be a good fit. One could safely increase the Devstia "Resources" settings to include 4 or 8 gigabytes of RAM and still have enough to run additional applications. Moving beyond that may make other applications less responsive. 

Use the 'Save' button to record your desired CPU and RAM settings; followed by clicking the 'Restart Server' button to have the changes take effect.

## SSH Keys
You can use the [Devstia password](#devstia-password) to access SFTP and SSH sessions (by default on port 8022 with password `personalweb`); alternatively you may wish to use SSH keys. The "Terminal/SSH" section of the Security tab in the Devstia Settings window has a convenient "Show SSH Keys" button. Clicking the "Show SSH Keys" button will show you the `devstia_rsa.pub` file containing the `devstia` user's public key. Likewise, the "Regenerate SSH Keys" button will remove and recreate new keys should you need to do so. 

::: tip Changing SSH Keys
You may need to use the "Regenerate SSH Keys" option if you are using a [snapshot](#snapshots) from another system or have changed keys; as snapshots can fall out-of-sync with the keys the native app uses to communicate. You may need to use the ["Restart Server"](#actions) button after regerating keys.
:::

## Devstia Password
The Devstia password can be changed using the Devstia Personal Web native desktop application. The username is `devstia` and the default password is `personalweb`. Changing the password will change the following passwords:

* Localhost page (https://localhost) for user `devstia`
* phpMyAdmin (https://localhost/phpmyadmin/) for user `devstia`
* SSH and SFTP login for user `devstia`
* SSH login for sudoers user `debian` (will use the same password)

 To change the password, use the "Devstia Password" textbox on the the Security tab within the Settings window.

## DNS Proxy
Devstia Personal Web contains a built in DNS proxy within the native app. You can turn on the proxy from the Security tab on the Settings panel. The DNS Proxy section reveals a "LAN IP" textbox that automatically detects your local computer's IP address. You may use this address to setup the DNS for additional machines and/or mobile devices on your network.

By using this IP address; your other computers/mobile devices will be able to locate and display the websites you have created using the **.dev.pw** TLD. 

## Snapshots
The Snapshots feature is located on the Devstia Settings window under the System tab. You may use the buttons "Create" and "Restore" to backup your entire web server VM (virtual machine). A single, fast, native-optimized, VM is used to store and manage all of you websites for optimal performance. You can backup or restore them as a single file using these snapshot controls.

The "Erase and Re-install Server" option can be used to ***erase the entire server*** and start with a new server without any websites; as if you are using Devstia for the first time. In lieu of downloading the VM again, this button will unpack the archive that was originally downloaded when you first installed Devstia Personal Web.

::: warning Optimize Hard Drive Space
Snapshots can grow in size over time as you manage websites. The files are compressed and optimized when using the snapshot "Create" button. You may want to occassionally use "Create", followed by "Restore" to backup and optimize space. 
:::

::: danger !!! The Devstia web server stack VM can grow up to 2 terabytes in size !!!
Devstia Personal Web edition will allow your server to accomodate very large websites and databases for a total size of up to 2TB. This may be beyond your physical hard drive space. Further, MySQL databases are known to be catastropic should they suddenly run out of space. 

***Be mindful of your computer's actual free hard drive space.***
:::

## Terminal
Devstia Personal Web native application includes easy access to the Linux Debian command line via the SSH protocol on port 8022. This option is available as a menu option from the system tray/menu on Windows and Mac. The termianl app will automatically open on Macintosh computers and a built-in [Mintty Cygwin](https://mintty.github.io) based terminal will appear for Windows users.

By default, the terminal will automatically login as the `devstia` user in the user's home folder. Websites can be located in the corresponding subfolder of the `web` folder.

![The Devstia Terminal on Macintosh](/images/devstia-terminal.jpg)

## File System
The file system option allows you to mount the Devstia web server files as a local drive on your computer system. The drive will appear as 'Devstia' on macOS and as the 'P' drive letter on Windows. The option can be located via the Devstia app's Settings -> System tab button titled 'Files' or via the system tray/menu popup menu.

The file system will reveal folders for each website you create, in addition to a 'blueprints' cache folder that is used to temporarily store your downloaded blueprint files when using QuickStart's 'Create a new website' option.

::: warning File System Performance
The file system drive is a convenience feature. However, operations with parent folders containing a large number of files can be slow. Instead, you may wish to use localhost page's [File Manager](https://hestiacp.com/docs/user-guide/file-manager.html) option for operations such as delete or use Linux commands with the built-in [Terminal](#terminal).
:::


## Uninstall
Uninstallation is easy. You will want to remove the application binaries and corresponding runtime data files. The data files include the base system snapshot and is fairly large; delete them to free space and to remove all traces of Devstia Personal Web edition.

### Uninstall on Macintosh
1) Drag the Devstia application icon in the Applications folder to the trash.
2) Using Finder, click the "Go" pull down menu *while holding the option key* and select **[Library](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://support.apple.com/guide/mac-help/go-directly-to-a-specific-folder-on-mac-mchlp1236/mac%23:~:text%3DTip%253A%2520To%2520go%2520to%2520your,Option%2520key%252C%2520then%2520choose%2520Library.&ved=2ahUKEwiVsLzUrv2HAxVJADQIHUOjIxIQFnoECBkQAw&usg=AOvVaw1AfeUARI-tID9k2P9CfMy4)**.
3) Within the @virtuosoft folder, drag the devstia-app subfolder to the trash. You may remove @virtuosoft folder too if the folder is empty.

### Uninstall on Windows
1) Click the start menu and type "Add or Remove Programs"
2) Type Devstia in the search box and run the uninstaller.
3) Using File Explorer ([with Hidden Files turned on](https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5#WindowsVersion=Windows_10)), open the folder path C:\Users\[username]\AppData\, where C:\ is your main hard drive letter and [username] is your Windows username.
4) Delete the following subfolders:
  - `\Local\@virtuosoft\devstia-app`
  - `\Roaming\@virtuosoft\devstia-app`

