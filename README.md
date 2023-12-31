# [tanc.red](https://tanc.red)

## This is a simple redirect server including personal file sharing functionality.

It mainly functions as my URL shortener with some manual setup. If the given redirect is not found, it will redirect to my actual website by default. Both the redirects as well as the default redirect can be set up in the `config.json` file.

Additionally, it serves for personal file sharing. Files I upload to the `./src/share` directory can be publicly linked to anyone. I have also added a simple file explorer on the `/share` route with password protection. The password protection is simplistic and not very secure. You can add the password as a URL parameter: `?password=`. It purely serves the purpose of fending off nosy people from digging through all shared files. This level of security is fine for me as the files are public anyway, so it doesn't really matter if someone actually finds out the password. The password can be set up in the `config.json` file.

The `is_production` flag in the `config.json` just controls the console output when starting the app. If it's set to `false`, you will see localhost URLs that are helpful during development. Otherwise, you will see just the port it is launching on, which is helpful for the setup on your server.

### Credits

File Icons by [FauzIDEA](https://www.flaticon.com/authors/fauzidea)
