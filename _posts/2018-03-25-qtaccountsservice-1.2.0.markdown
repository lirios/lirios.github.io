---
layout: post
title: "QtAccountsService 1.2.0"
date: 2018-03-25 11:01:00 +0200
author: plfiorini
categories: blog
tags: announcement release qtaccountsservice
style: blue.css
navitem: nav-blog
---

We are proud to announce the immediate availability of QtAccountsService 1.2.0.

QtAccountsService is a Qt-style wrapper around freedesktop.org [AccountsService][accountsservice] DBus service.

Improvements over the previous version:

* Requires qbs 1.9.0 and liri-qbs-shared 1.2.0
* Support static analyzer
* Fix compiler warnings
* Check minimum Qt version required
* Rename autotest to make it recognizable
* Setup autotest environment variables
* Fix examples

##### Download

You can download the source tarball from [GitHub][tarball]

**SHA256 checksum:** `358a31f1b7db2f726a5146115843677254da3ede2c91db8788eac1cf6a5a88b5`


[accountsservice]: http://www.freedesktop.org/wiki/Software/AccountsService
[tarball]: https://github.com/lirios/qtaccountsservice/releases/download/v1.2.0/qtaccountsservice-1.2.0.tar.xz
