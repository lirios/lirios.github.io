---
layout: onecolumn
title: Make a USB stick
permalink: /download/make-usb-stick/
navitem: nav-download
style: blue.css
---

Using a USB flash drive is one of the best ways to test Liri OS and it’s also
the only way to try it without touching your hard drives.

Running Liri OS on USB flash drives is way faster than running it from a CD.

Note that running off a USB flash drive might still be a lot slower than a
real hard drive depending on your model. In the following guide, we will
copy the image directly to the raw drive, not to a partition, replacing
everything including the MBR, destroying all the partitions and data that
were there.

First, be sure you have a computer that supports booting off of USB
flash drives. That shouldn’t be a problem on most recent computers.

You might need to hit a function key (e.g F8) at boot or change the
boot device order in your BIOS for the USB stick to be picked up, please
refer to your computer or mother-board manual.

Start by downloading the live image from the download page.

Get a sufficiently big USB flash drive (at least the size of the unzipped
image), then depending on your operating system, follow one of the
methods below.

## Linux and FreeBSD

Open a terminal.

Find the device name of your USB flash drive by typing this command:

```sh
sudo fdisk -l
```

This will output the device name of the disks present on your system.

You can guess the name by looking at the drive size or by executing this
command before and after plugging your USB flash drive.

Ensure the USB device is unmounted:

```sh
umount /dev/sd[x]
```

(where /dev/sd[x] is your USB device) and then issue the following command:

<div class="alert alert-danger"><strong>Be sure to verify by all means that it's the correct device name as the following command will erase everything on that drive!</strong></div>

```sh
dd if=/path/to/lirios-live-media.iso of=/dev/sd[x] bs=4M
```

where /dev/sd[x] is your USB device. **Make sure to use /dev/sd[x] and not /dev/sd[x]1.**

<div class="alert alert-warning"><strong>Note:</strong> Some older firmware
does not understand the isohybrid hack where start of fake partition offset
is 0. See <a href="https://bugs.archlinux.org/task/32189" target="_blank">here</a>
for a fix involving isohybrid.pl</div>

## Windows

Download [ImageWriter](https://sourceforge.net/projects/win32diskimager/), unzip it in
the place of your choice and run it.

<div class="alert alert-danger"><strong>Be sure to carefully identify and note the drive
letter corresponding to your USB stick, the risk is that you could completely overwrite
and destroy data on the wrong disk.</strong></div>

Rename the downloaded live image to *lirios-live-image.img* otherwise you won't see
it in ImageWriter's file selection panel. This difference in suffixes is simply
cosmetic however, the image will be written fine regardless.

Run the ImageWriter program (Win32DiskImager.exe), select the ISO file, select the
correct USB drive letter and click the **Write** button.

Don't remove the USB stick while it's still writing to it. When finished, Windows
won't be able to access the content of the stick and might propose you to format it,
this is perfectly normal. *Do not format* it if asked.

If you'd like to unplug the USB flash drive now, be sure to eject it properly using
the usual "Safely remove device" icon from the task bar.

## MacOS X

Open a terminal (under Utilities).

Find the device name of your USB flash drive by typing this command:

```sh
diskutil list
```

This will output the device name of the dsisk present on your system.

You can guess the name by looking at the drive size of by executing this
command before and after plugging your USB flash drive.

Be sure to unmount the drive

```sh
diskutil unmountDisk /dev/disk[x]
```

(where [x] is the disk number of your USB flash drive as found previously)

<div class="alert alert-danger"><strong>Be sure to verify by all means that it is the correct
device name as the following command will erase everything on that drive!</strong></div>

```sh
sudo dd if=/path/to/lirios-live-media.iso of=/dev/rdisk[x] bs=1m
```

If you'd like to unplug the USB stick, be sure to eject it properly:

```sh
diskutil eject /dev/disk[x]
```
