---
layout: post
title: "QbsShared 1.1.0"
date: 2018-01-19 04:00:00 +0200
author: plfiorini
categories: blog
tags: announcement release qbs-shared
style: blue.css
navitem: nav-blog
---

We are proud to announce the availability of a new version of qbs-shared: modules and imports for the qbs build system that we use with all the Liri projects.

##### Features

* Clang static analyzer support
* Do not set QML plugins as bundles
* Add LiriProduct import with common features for all products
* Add LiriPrivateModule import for private modules
* Add LiriLibraryProbe import that finds includes and shared libraries without pkg-config support
* Adapt to qbs 1.10
* Add AppStreamQt module

##### Download

You can download the source tarball from [GitHub][tarball]

**SHA256 checksum:** `ab1d1fc8a7a76df6a7e7b521c9ddfcdc997d8a6d57c3f43acbb6bbe5f2059ae7`


[tarball]: https://github.com/lirios/qbs-shared/releases/download/v1.1.0/liri-qbs-shared-1.1.0.tar.xz
