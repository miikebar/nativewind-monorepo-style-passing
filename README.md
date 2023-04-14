```
npm install
npm run start -w native
```

![Screenshot](https://i.imgur.com/DHOjfOP_d.webp?maxwidth=760&fidelity=grand)

It seems like the className prop is not compiled to style when used in a package (/packages/ui/nested/PackageNestedBox.tsx).

If you check the /apps/native/src/components/LocalNested.tsx (which is exactly the same except for a different bg color), it works as expected -- both the bg color and padding are applied, whereas for the PackageNestedBox only padding is being applied.

I've also created PackageNestedView which uses RN View instead of the custom Box to make sure the Tailwind configuration includes the files in the package, and it works fine. It also works as expected when using styled helper.

The View with "Package nested using Box" should have a green background color.
