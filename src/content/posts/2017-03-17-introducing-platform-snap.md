---

layout: post
title: "Introducing the Liri Platform Snap"
date: 2017-03-17 22:20:00 +0100
author: timsueberkrueb
categories: blog
tags: announcement snap
style: blue.css
navitem: nav-blog
---

We're proud to introduce the Liri Platform snap.

[Snap][snapcraft-io] is the new packaging format developed by Canonical
aiming to provide sandboxed and easy to install applications for
Ubuntu and beyond. We're working towards getting
our [cross-platform applications][liri-io-apps] packaged as snaps.

Now we've reached our first milestone in this continuing effort by creating
a platform snap package providing all the libraries we need for our applications
to run. In this manner we are able to minimize the disk space usage as
the individual app packages will not need to ship their own copy of the libraries
needed.

##### Try it out

We're happy to announce that this platform snap is now available for download
from the Ubuntu Snap Store. Note that the provided package is still in an
early stage of development and thus is only available on the `edge` channel.
There is no stable release, yet!

Also note that we have tested this on Ubuntu only for now.
While Canonical is working hard towards making snaps run seemlessly on a big
variety of distributions, this effort is still underway. If you want to
[try this on platforms other than Ubuntu][snapd-install], your experience may
 vary.

To install the Liri Platform snap, simply run:

`snap install --edge liri-platform0 # use sudo if necessary`

The package weights around 110 MB.
After installing, you can try the included demo of our UI framework,
[Fluid][fluid-gh]:

`snap run liri-platform0.fluid-demo`

Happy testing!

##### Technical Details

You want to learn more? Great! So what's in the snap?

It currently includes:
* Qt (v5.8.0)
* Fluid (v0.10.0) and the Fluid Demo
* liri-app-launch (A snap-specific launcher script for future app snaps)
* fluid-dialog (A snap-specific dialog for future app snaps)
* yaml CLI parser (For future app snaps)
* Dependencies for all of the above

Checkout [the code on GitHub][platform-snap-gh] to see how it's all put
 together and have a look the [snapcraft documentation][snapcraft-io].

##### Credits

At this point, we'd like to send out a big *thank you* to the kind folks at
Canonical who were super supportive and helped us to accomplish this milestone.

[fluid-gh]: https://github.com/lirios/fluid
[snapd-install]: https://snapcraft.io/docs/core/install
[liri-io-apps]: https://liri.io/apps/
[snapcraft-io]: https://snapcraft.io/
[platform-snap-gh]: https://github.com/lirios/platform-snap
