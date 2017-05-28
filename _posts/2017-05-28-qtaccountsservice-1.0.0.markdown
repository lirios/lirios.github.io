---
layout: post
title: "QtAccountsService 1.0.0"
date: 2017-05-28 15:00:00 +0200
author: plfiorini
categories: blog
tags: announcement release qtaccountsservice
style: blue.css
navitem: nav-blog
---

We are proud to announce the immediate availability of QtAccountsService 1.0.0.

QtAccountsService is a Qt-style wrapper around freedesktop.org [AccountsService][accountsservice] DBus service.

This is the first stable release with the following improvements over the previous release:

* Stable API
* Add UserAccount::setPasswordHint()
* More roles for UsersModel
* Asynchronous users listing
* Addressed issues reported by Clazy level 2 checks
* More examples
* Switch build system from cmake to [Qbs][qbs]

##### Download

You can download the source tarball from [GitHub][tarball]

**SHA256 checksum:** `ccfedf6f36cecfddb053e6cdf7ab4d79ab32e0d9831ae869c21a3f20e5f86ede`


[accountsservice]: http://www.freedesktop.org/wiki/Software/AccountsService
[tarball]: https://github.com/lirios/qtaccountsservice/releases/download/v1.0.0/qtaccountsservice-1.0.0.tar.xz
[qbs]: http://doc.qt.io/qbs/index.html
