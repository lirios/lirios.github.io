---
layout: onecolumn
title: Virtual machines
permalink: /download/virtual-machines/
theme: blue-light_blue
navitem: nav-download
---

## QEMU

Make sure QEMU and KVM are installed, your host is a x86_64 machine and have at
least 2GB of RAM.

Run the ISO image like this:

```sh
qemu-system-x86_64 -enable-kvm -m 1GB -vga qxl -cdrom lirios-20170116-x86_64.iso
```

For the more adventurous, here's how to enable networking and forware port 22 from
VM to the host port 10022:

```sh
qemu-system-x86_64 -enable-kvm -m 1GB -vga qxl -net user,hostfwd=tcp::10022-:22 -net nic -cdrom lirios-20170116-x86_64.iso
```

Please note that SSH is not enabled by default.

## VirtualBox

Unfortunately VirtualBox doesn't support Wayland yet.

## VMware

If you try the ISO image on VMware, please enable 3D acceleration.

To do so select the virtual machine, click on the VM → Settings menu item,
now in the Hardware tab select Display and check Accelerate 3d graphics.
