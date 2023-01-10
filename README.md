# DODAI
A tool that automatically creates boiler templates for creating npm packages.  
It takes only 3 minutes to publish npm package.

[![CICD](https://github.com/trysd/npm-dodai/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/trysd/npm-dodai/actions/workflows/release.yml)

## Usage
Run npx with module name.  
Specify the module name with a character string that can be used as a class name.
```
$ npx dodai@latest ExampleName
$ npm install
```
- Names with @, etc. will be fixed manually after the boilerplate is created.
- The package name in package.json is returned as: Manually adjust as expected.  
ExampleColorTv => example-color-tv

## Develop usage

### auto reload

When creating a js tool
```
$ npm run dev
```

When creating a command line tool
```
$ npm run command
```

## Related work you should do

- Add NPM_TOKEN to Actions secrets on github.
- Describe the necessary contents in repository.url etc. of package.json.
- 