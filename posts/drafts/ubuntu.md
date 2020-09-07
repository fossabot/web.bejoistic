# 1. Ubuntu Linux

Last Updated: 29 Nov 2018

Download and install [Ubuntu Linux 18.10](https://www.ubuntu.com/download/desktop).

Create a shell script

```bash
gedit install.sh
#paste in the next code block and save
chmod +x install.sh
./install.sh
```

The content of install.sh:

```bash
#!/bin/bash

sudo apt install -y curl

echo "ADDING REPOSITORIES"
for f in  ppa:obsproject/obs-studio ; do sudo add-apt-repository $f; done
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list


echo "UPDATING AND UPGRADING"
sudo apt update
sudo apt upgrade

echo "INSTALL APPS"
sudo apt install -y apt-transport-https
sudo apt update
sudo apt install -y code
sudo apt install -y yarn
sudo apt install -y chromium-browser
sudo apt install -y firefox
sudo apt install -y deluge
sudo apt install -y net-tools
sudo apt install -y npm
sudo apt install -y okular
sudo apt install -y vlc
sudo apt install -y xchm
sudo apt install -y git-cola
sudo apt install -y chrome-gnome-shell
sudo apt install -y terminator
sudo apt install -y dukto
sudo apt install -y nodejs
sudo apt install -y gcc
sudo apt install -y make
sudo apt install -y libssl-dev
sudo apt install -y libreadline-dev
sudo apt install -y zlib1g-dev
sudo apt install -y libsqlite3-dev
sudo apt install -y libpq-dev
sudo apt install -y variety
sudo apt install -y variety-slideshow
sudo apt install -y ffmpeg
sudo apt install -y obs-studio
sudo apt install -y libcurl4-gnutls-dev
sudo apt install -y sqlitebrowser
sudo apt install -y gnome-tweak-tool
sudo apt install -y sudo snap install mailspring
sudo apt install -y network-manager-openvpn-gnome
sudo apt install -y dconf-cli
sudo apt install -y npm
sudo apt install -y git
sudo snap install gitkraken
sudo snap install postman
sudo snap install spotify
sudo snap install discord
sudo snap install slack --classic
sudo snap install teleconsole --classic
sudo snap install inkscape
sudo snap install heroku --classic
sudo snap install mailspring
sudo snap install libreoffice
sudo npm install -g git-removed-branches

echo "INSTALL LAPTOP TOUCHPAD APP?"
sudo apt install -y touchpad-indicator

echo "REMOVE UNNEEDED APPS"
sudo apt remove aisleriot
sudo apt remove kdeconnect
sudo apt remove gnome-mahjongg
sudo apt remove gnome-mines
sudo apt remove remmina
sudo apt remove rhythmbox
sudo apt remove simple-scan
sudo apt remove shotwell
sudo apt remove gnome-sudoku
sudo apt remove gnome-todo
sudo apt remove totem
sudo apt remove thunderbird

echo "INSTALL NPM"
sudo npm install -g jasmine eslint git-removed-branches

echo "INSTALL PRIVATE INTERNET ACCESS"
wget https://www.privateinternetaccess.com/installer/pia-nm.sh
sudo bash pia-nm.sh
```
