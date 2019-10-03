Liri Web site
=============

This Liri Web site is based on [Jekyll](https://jekyllrb.com/).

## Development setup

Install the following stuff, if the first time:

```sh
gem install bundler
cd lirios.github.io
bundle install
```

Serve the pages locally with:

```sh
cd lirios.github.io
bundle exec jekyll serve
```

## Delivery

We work on the `develop` branch and test locally.
Once the changes are ready, we push them.
The web site is automatically built from the `develop`
branch and can be seen at [lirios.github.io](https://lirios.github.io/).

If everything is fine we can finally merge `develop` into
`master` then push. The web site at [liri.io](https://liri.io)
is automatically published.
