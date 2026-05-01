---
layout: post
title: "QbsShared 1.3.0"
date: 2018-10-15 22:30:00 +0200
author: plfiorini
categories: blog
tags: announcement release qbs-shared
style: blue.css
navitem: nav-blog
---

We are proud to announce the availability of a new version of qbs-shared: modules and imports for the qbs build system that we use with all the Liri projects.

##### Features

* Change `lirideployment.appDataDir` default value to `<dataDir>/metainfo`.
* Fix run environment with qbs >= 1.11.0
* Depends on qbs >= 1.11.0
* Read-only `found` property
* Do not set cpp.cxxLanguageVersion when exporting Qbs dependencies
* Fix cross-compiler builds
* Add KWaylandClient and KWaylandServer modules
* Add imports for Liri Settings modules and Liri Shell indicators

##### Download

You can download the source tarball from [GitHub][tarball]

**SHA256 checksum:** `0eb41b669c894ba289917e04f575e996692f2382b06d9545aab2f06d85fc544c`


[tarball]: https://github.com/lirios/qbs-shared/releases/download/v1.3.0/liri-qbs-shared-1.3.0.tar.xz
