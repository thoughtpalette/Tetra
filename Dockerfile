FROM node

RUN mkdir /webapp_root
ADD . /webapp_root/
WORKDIR /webapp_root

RUN apt-get update
RUN apt-get -f -y install Xvfb

RUN cd /usr/local
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb
RUN apt-get -f -y install

RUN wget http://ftp.mozilla.org/pub/mozilla.org/firefox/releases/34.0.5/linux-x86_64/en-US/firefox-34.0.5.tar.bz2
RUN tar xvjf firefox-34.0.5.tar.bz2
RUN ln -s /usr/local/firefox/firefox /usr/bin/firefox
RUN apt-get install -y libasound2-dev

RUN npm install -g bower
RUN npm install -g grunt-cli
RUN cd /webapp_root

EXPOSE 3000
