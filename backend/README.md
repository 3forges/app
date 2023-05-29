# The Pesto API


Pesto makes you completely independent from the Technologuy people you pay.

Pesto is cutting edge tehcnology, mainly based on open source

Pesto is a new app to send wordpress back to the jurassic where it belongs.


The pesto API is the backend of Pesto : It consists in a REST API. 


## Contributor guide

### Stack setup


## ROADMAP

* Having a REST API with only Github authentication, that has the following endpoints : 
  * API BASE URL : https://app.pesto.io/api/
  * List all user's Github project : 
    * To grant authorization to the Pesto Github App, for Pesto to be authorized to do its job.
    * determine the exact autorization to grant, but here are the actions Pesto needs to perform : 
      * create a new SSH key with `ssh-keygen -t rsa -b 4096`, and add it to hte Github User's Keys
      * create a new GPG Key, and add it to the Github User's Keys 
      * git push to the remote repository on github : on all branches, except the master git branch (the bot will create a pull request, which the user will approve from the Pesto Web UI) 
      * must 
  * 
## ANNEX: References

* Loopback 4 : https://loopback.io/doc/en/lb4/
