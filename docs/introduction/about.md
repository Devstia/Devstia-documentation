# About
Devstia is an open-source web server stack with an enhanced control panel. It is designed to help web designers and developers create *and* run amazing web applications.

Devstia comes in the form of either a [personal web server](https://en.wikipedia.org/wiki/Personal_web_server) desktop application ([Devstia Personal Web](devstia-personal-web)) a.k.a. 'localhost server' or via a shared cloud hosted service ([Devstia Cloud Connect](devstia-cloud-connect)). The free desktop application runs on both Macintosh and Windows computers with native optimizations for Apple Silicon and Intel based processors. The shared cloud hosted service is offered as subscription based SaaS. 

The "Devstia" name is the visual brand identity for the [mashup](https://en.wikipedia.org/wiki/Mashup_(web_application_hybrid)) of technologies created by [Virtuosoft](https://virtuosoft.com). 

## User Interface
At the heart of Devstia is the fantastic control panel [HestiaCP](https://hestiacp.com) that has been enhanced with additional open-source technologies. Understanding the difference between HestiaCP and Devstia is visually illustrated from the enhanced UI. Upon login, you'll notice the default tab is [QuickStart](https://devstia.com/documentation/quickstart/about.html) (not to be confused with the [Quick Install](https://hestiacp.com/docs/user-guide/web-domains.html)). This furnishes a powerful, wizard-like interface for managing websites; accomodating the allocation, copying, and freeing of database and filesystem dependencies; as well as automating migration.

![QuickStart](/images/quickstart.png)

Devstia includes support for NodeJS application hosting; allowing users and websites to host multiple apps or mixed language runtimes.

![NodeApp](/images/nodeapp.png)

NodeJS support permits additional Quick Install apps in Devstia such as Node-RED, NodeBB, ~~Ghost~~, and VitePress.

![Quick Install](/images/quickinstall.jpg)

::: info
Ghost support has been removed as the Ghost project has [stopped support for MariaDB](https://forum.ghost.org/t/is-the-latest-version-cant-be-installed-with-mariadb-anymore/34241). While support for MySQL8 is on the wishlist for Devstia; Ghost support has been indefinitely suspended. 
:::

## Technologies
 Difference between HestiaCP and Devstia exists within the UI and the underlying technology stack. These have been outlined via the feature lists below and with reference links to their respective open-source projects. 
 
 Devstia incorporates the following HestiaCP base components in both it's [Devstia Personal Web](devstia-personal-web) and [Devstia Cloud Connect](devstia-cloud-connect) versions.

* Apache - Web server.
* Nginx - Reverse proxy and fast web server.
* PHP-FPM - PHP programming language.
* VSFTP - FTP server.
* MariaDB - Database server.
* PostgreSQL - Database server.

---

Devstia includes the following additional open-source components to fulfill its goal of creating a powerful development tool and runtime. Most of these components are delivered as plugins through the [HestiaCP Pluginable](../pluginable/about) project.

* NodeJS - NodeJS programming language.
* PM2 - Process Manager 2 for controlling NodeJS applications.
* OpenVSCode - Online source code editor.
* Xdebug - Step-by-step debugging tool.
* MailCatcher - An email testing tool.
* NodeBB - Enhanced blueprints for building forums.
* NodeRED - Enhanced blueprints for no-code/low-code development.
* ~~Ghost - Enhanced blueprints for blogging websites.~~
* VitePress - Enhanced blueprints for documentation websites.

---

In addition, the following open-source components are included to create the Devstia Personal Web edition.

* Electron Forge - Native desktop application development library.
* QEMU - Machine virtualizer and hypervisor interface.
* Debian Linux - Base VM operating system. 
* Cygwin - Core components for Windows SSH interface.
* RClone - WebDAV based file system server for use on Windows.
* Samba - SMB based file system server for use on Macintosh.
* WP Global - Design-time tools for WordPress development.
