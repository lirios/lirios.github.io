---
layout: post
title: "QbsShared 1.2.0"
date: 2018-03-11 21:58:00 +0200
author: plfiorini
categories: blog
tags: announcement release qbs-shared
style: blue.css
navitem: nav-blog
---

We are proud to announce the availability of a new version of qbs-shared: modules and imports for the qbs build system that we use with all the Liri projects.

The main change of this release is with the `lirideployment` module that now has the `lirideployment.prefix` property that defaults to `/usr/local`.

All `lirideployment` paths are now absolute.

##### Features

* Prepend qbs.sysroot and fix builds with cross-compiler
* Use absolute paths for `lirideployment`
* Prepend `lirideployment.prefix` to all paths instead of using `qbs.installPrefix`
* No longer rely on `qbs.installRoot` being referenced by code
* Use `Probes.PkgConfigProbe` instead of `LiriPkgConfigProbe`
* `LiriLibraryProbe` find multiple files
* Rewrite several modules to use `LiriLibraryProbe`
* Depends on qbs >= 1.9.0

##### Download

You can download the source tarball from [GitHub][tarball]

**SHA256 checksum:** `1cbf3475bef23f3533bb164ad9eda7042d488a0e7a6a954b48cfb4c8cee1d1aa`


[tarball]: https://github.com/lirios/qbs-shared/releases/download/v1.2.0/liri-qbs-shared-1.2.0.tar.xz
