---
layout: onecolumn
style: blue.css
title: "Welcome to Liri!"
date: 2017-01-01 00:00:00 +0000
author: plfiorini
categories: blog
---

We are proud to announce Liri, an OS and apps built with modern design and features.

Liri is the merge between [Hawaii](http://hawaiios.org), [Papyros](http://papyros.io) and the [Liri Project](https://github.com/liri-project).

Since we all have the same goals and share the same technology stack we decided to join forces and merge the three teams in order to pursuit the goal of making an OS and apps with modern design and features that do not get in your way faster and better.

As a result, [Hawaii](http://hawaiios.org) and [Papyros](http://papyros.io) are now discontinued and continue under the name Liri OS.

Liri OS upcoming release is version 0.9.0 because it continues where [Hawaii](http://hawaiios.org) left off.

[qml-material](https://github.com/papyros/qml-material), the Material framework developed by Papyros, is no longer maintained. It has been replaced by [Fluid](https://github.com/lirios/fluid) that is based on QtQuick Controls 2. Fluid still support Material Design and optionally Universal.

[Green Island](https://github.com/greenisland/greenisland) the Wayland compositor will stick around for a little while, for Liri OS 0.9.0 to be precise. With Liri OS 0.10.0 we will replace it with the new [Wayland libraries](https://github.com/lirios/wayland). Patches to [Green Island](https://github.com/greenisland/greenisland) are no longer accepted at this point.

Core apps such as Files, Terminal, AppCenter and Settings were ported to Fluid. Settings, in particular, got a UI revamp and more modules compared to the [Hawaii](http://hawaiios.org) and [Papyros](http://papyros.io) counterpart.

As far as cross-platform apps are concerned: Browser and Calculator were rewritten and already support Fluid, Text is progressing nicely, Player and Music will be tackled later on.

The OS is currently based on Arch Linux and at this time it doesn't support OSTree yet so more work in this area will be done during 2017.

Many changes were done to our workflow, we employed [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) on all projects so you can always find the latest stable version on the `master` branch while work in progress changes are on `develop`.

OS images and packages are now built automatically by a lightweight Golang program.
We also have improved the Travis continuous integration for all repositories, and the majority of them build with both gcc and clang with clazy.

The development team now communicates on a daily basis with Slack.

Not all projects will be released together.
* Frameworks and libraries such as Fluid, Vibe and QtAccountsService all have their own release schedule.
* OS related projects such as Shell, Workspace, Themes, Wallpapers and Settings (which often depends on changes to Workspace) all share the same release schedule.
* Core apps such as Files, Terminal and AppCenter have an independent release schedule.
* All cross-platform apps such as Browser, Calculator, Text, Player and Music have each their own release schedule.
