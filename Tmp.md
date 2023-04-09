## Vuetify + SCSS

Guide in vuetify docs does not work at all, because of vite or something else. I used that algorithm to include vuetify styles in project:

1. Added vuetify to [global styles](./src/scss/_global.scss) with `@use 'vuetify/lib/styles/main.sass';`
2. Encapsulate vuetify customization to individual [file](./src/scss/libs/_vuetify.scss)
3. Configure vite's vuetify plugin with configFile property
```js
  vuetify( {
    autoImport: true,
    styles: {
      configFile: 'src/scss/libs/_vuetify.scss',
    },
  } ),
```

### <u>How to use vuetify variables in style section?</u>

~~There is no way...~~

There is alias in vite 

```js
{
  // ...
  '~vuetify': resolve( __dirname, 'src', 'scss', 'libs', '_vuetify.scss' ),
},
```

So U need only import it via  scss `@import` and use vuetify variables:

```scss

<style scoped lang="scss">
@import '~vuetify';

.test-button {
  margins: map-get($spacers, 4);
}
</style>

```

## Stylelint + VSC

For stylelint in Visual studio code U need append properties to [$root/.vscode/settings.json](./.vscode/settings.json)

```json
  "stylelint.validate": [
    "vue",
    "css",
    "scss"
  ],
  "css.validate": false,
  "scss.validate": false,
```
