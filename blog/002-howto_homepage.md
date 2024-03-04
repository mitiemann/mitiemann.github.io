+++
title = "How to set up a private website with Franklin.jl and Github Pages"
+++

# How to set up a private website with Franklin.jl and Github Pages

This how-to guide retraces my steps when I've created this website. 
I don't promise to keep this information up-to-date, so your mileage may vary. 
If you encounter problems, bugs, or have general feedback for improvement, please open 
an [issue](https://github.com/mitiemann/mitiemann.github.io/issues) or a [pull request]() 
(**TODO** fix link).

This guide roughly follows the [official documentation](https://docs.github.com/en/pages), 
but using [Franklin.jl](https://franklinjl.org/) instead of Jekyll (**TODO** spelling?).

## 0. Prerequisites

- I assume you have basic understanding of 
  [`git`](https://docs.github.com/en/get-started/using-git/about-git). 
  This means you know how to `clone`, `pull`, `commit`, and `push`, and you know what 
  branches are, how to create them and how to switch between them.
- I assume you have a [Github](https://github.com) account.
- I assume you have a basic understanding of programming and the 
  [Julia programming language](https://julialang.org). 
  You have a recent `julia` version installed (at time of writing 1.10).

Further reading for this section:
- `git`'s official [homepage](https://git-scm.com/) and 
  [documentation](https://git-scm.com/doc).
- Github's official 
  [quickstart](https://docs.github.com/en/get-started/quickstart).
- Julia's [official documentation](https://docs.julialang.org/en/v1/).

## 1. Basic setup

In the first steps, we'll create the correct Github repository, create a template and push 
it to Github.

[**TODO** expand]

## x. Improve deployment

[**TODO** learn how to improve deployment]

## Optional: get a top-level domain

Your website is now visible under `https://[YOURUSERNAME].github.io`. 
But wouldn't it be nice to also have your website at `https://www.[YOURDOMAINNAME].de`?

To do this, follow these steps:

1. Get a top-level domain. I've ordered mine from 
  [united-domains.de](https://www.united-domains.de), but there are others.
1. [**TODO** learn how to set this up]

Further reading for this section:
- Github's [official guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
