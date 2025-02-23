window.exclude = [];
window.watch = false;
window.environment = 'release';
window.useXstateInspect = false;
window.localMode = 'build';

window.appConfig = {
  showDebugger: false,
  showExperimentalFeatures: false,
  projectGraphs: [
    {
      id: 'local',
      label: 'local',
      url: 'assets/graphs/nx-examples.json',
    },
  ],
  defaultProjectGraph: 'local',
};

window.projectGraphResponse = {
  hash: 'bd93a0dd65a777ebb28146f82c2f5c1ee40edf9e44c9e8f8f18c55a1464988c0',
  projects: [
    {
      name: 'products-product-detail-page',
      type: 'lib',
      data: {
        tags: ['type:feature', 'scope:products'],
        root: 'libs/products/product-detail-page',
        files: [
          {
            file: 'libs/products/product-detail-page/.eslintrc.json',
            hash: '27519506e3b1095fc3d2395d0bc6163409573e27',
          },
          {
            file: 'libs/products/product-detail-page/jest.config.js',
            hash: 'ded1479a6a329c3d6118d88d2dc7978b8e9824a2',
          },
          {
            file: 'libs/products/product-detail-page/project.json',
            hash: '0c9022339c45bb9a91c24e0da3329a03c8972616',
          },
          {
            file: 'libs/products/product-detail-page/README.md',
            hash: 'f466b2f632d80578a70301ffb7dc7b99c1e5c918',
          },
          {
            file: 'libs/products/product-detail-page/src/index.ts',
            hash: '1f5976f2ae3b5938d9bd48e9b213a7bc4bce479c',
          },
          {
            file: 'libs/products/product-detail-page/src/lib/product-detail-page/product-detail-page.component.html',
            hash: 'fd5fa276dc13f789ae5d7a37703a296753aec8be',
          },
          {
            file: 'libs/products/product-detail-page/src/lib/product-detail-page/product-detail-page.component.scss',
            hash: '98fbca8900da6d5c5f6373558f5bd69efe190780',
          },
          {
            file: 'libs/products/product-detail-page/src/lib/product-detail-page/product-detail-page.component.spec.ts',
            hash: 'e8390b7218d2dca9eb4be8d2b1cc08e1b1c0de1b',
            deps: [
              'npm:@angular/core',
              'npm:@angular/router',
              'npm:@ngrx/store',
              'npm:rxjs',
              'shared-product-state',
            ],
          },
          {
            file: 'libs/products/product-detail-page/src/lib/product-detail-page/product-detail-page.component.ts',
            hash: 'c20bd27b12494827624a3835b1ec6475efaf0913',
            deps: [
              'npm:@angular/core',
              'npm:@angular/router',
              'npm:@ngrx/store',
              'npm:rxjs',
              'shared-product-state',
              'shared-product-ui',
            ],
          },
          {
            file: 'libs/products/product-detail-page/src/lib/products-product-detail-page.module.spec.ts',
            hash: '01541f218a3a1b95b056fd9d2d1b578e5a2e3d9a',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/products/product-detail-page/src/lib/products-product-detail-page.module.ts',
            hash: '5c06b527e7ffe870f1960a74a845106beca79b6b',
            deps: [
              'npm:@angular/common',
              'npm:@angular/core',
              'npm:@angular/router',
              'shared-product-state',
            ],
          },
          {
            file: 'libs/products/product-detail-page/src/test-setup.ts',
            hash: 'f64f15cae181c8297512e03e30b2d2f7b7223f5b',
            deps: ['npm:jest-preset-angular', 'npm:document-register-element'],
          },
          {
            file: 'libs/products/product-detail-page/tsconfig.json',
            hash: '1b6ee0bf6f3df276fbfc5c683aca2e02c6c6523a',
          },
          {
            file: 'libs/products/product-detail-page/tsconfig.lib.json',
            hash: 'a86e8be7a68f3cc03c74c5a09390b33e2f776702',
          },
          {
            file: 'libs/products/product-detail-page/tsconfig.spec.json',
            hash: '1f8e7f6c3e5a63e2af398d49fef36e6f6659fb7c',
          },
        ],
      },
    },
    {
      name: 'shared-product-state',
      type: 'lib',
      data: {
        tags: ['scope:shared', 'type:state'],
        root: 'libs/shared/product/state',
        files: [
          {
            file: 'libs/shared/product/state/.babelrc',
            hash: '0cae4a9a81270d6cf3315436f594bf2fbd4fb3e2',
          },
          {
            file: 'libs/shared/product/state/.eslintrc.json',
            hash: 'eee5f453593a2b8e7f865305029b7edc3449cca6',
          },
          {
            file: 'libs/shared/product/state/jest.config.js',
            hash: '5a309f7bc9c2aba47951f68dfd2dc74701537484',
          },
          {
            file: 'libs/shared/product/state/project.json',
            hash: 'c0b3a895e001a77b6e39df10c105551f2a9d1ba1',
          },
          {
            file: 'libs/shared/product/state/README.md',
            hash: '63538ffc745d3f82d93bcfbd61608057bf9cafaf',
          },
          {
            file: 'libs/shared/product/state/src/index.ts',
            hash: '0f1e1c9a63ae70e3c2cadd493263853511567dfd',
            deps: ['npm:@ngrx/store'],
          },
          {
            file: 'libs/shared/product/state/src/lib/+state/products.actions.ts',
            hash: '4c0efeeec1adfcecd34b20bda87fce5f24a64675',
            deps: ['npm:@ngrx/store'],
          },
          {
            file: 'libs/shared/product/state/src/lib/+state/products.reducer.spec.ts',
            hash: 'b2821f72394868ca503eb637f2891564851583eb',
            deps: ['npm:@ngrx/store', 'shared-product-data'],
          },
          {
            file: 'libs/shared/product/state/src/lib/+state/products.reducer.ts',
            hash: '9168586d19b76b0dd462dafbb5b6998c4da5ba53',
            deps: ['shared-product-data', 'shared-product-types'],
          },
          {
            file: 'libs/shared/product/state/src/lib/+state/products.selectors.spec.ts',
            hash: '25cd673e1ff8b591f92f734944cd20adf965b612',
            deps: ['shared-product-data'],
          },
          {
            file: 'libs/shared/product/state/src/lib/+state/products.selectors.ts',
            hash: 'da9e68bf4631ddb35e19659c3db04a0953a62a61',
          },
          {
            file: 'libs/shared/product/state/src/lib/shared-product-state.module.spec.ts',
            hash: '713543b7a36b2027985904f9a74124f79406108c',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/shared/product/state/src/lib/shared-product-state.module.ts',
            hash: '144207d2b4609204b8ceab1ae81d1079d61b3949',
            deps: [
              'npm:@angular/common',
              'npm:@angular/core',
              'npm:@ngrx/store',
            ],
          },
          {
            file: 'libs/shared/product/state/src/react.ts',
            hash: 'fa1cb4754b3dd584ba8ca23fe462c906f59945d6',
          },
          {
            file: 'libs/shared/product/state/src/test-setup.ts',
            hash: '1100b3e8a6ed08f4b5c27a96471846d57023c320',
            deps: ['npm:jest-preset-angular'],
          },
          {
            file: 'libs/shared/product/state/tsconfig.json',
            hash: 'd32f55e3999447ae24e89f0e76d8c3128113c85e',
          },
          {
            file: 'libs/shared/product/state/tsconfig.lib.json',
            hash: '6d8381892432362a9efb491476651c6b8cc2d1a2',
          },
          {
            file: 'libs/shared/product/state/tsconfig.spec.json',
            hash: '6089636545924f32531e4bd15d9d031aa84f63e0',
          },
        ],
      },
    },
    {
      name: 'shared-product-types',
      type: 'lib',
      data: {
        tags: ['type:types', 'scope:shared'],
        root: 'libs/shared/product/types',
        files: [
          {
            file: 'libs/shared/product/types/.babelrc',
            hash: '0cae4a9a81270d6cf3315436f594bf2fbd4fb3e2',
          },
          {
            file: 'libs/shared/product/types/.eslintrc.json',
            hash: 'deb72aabdf74e23f16519b8cbeb5d63e769cd470',
          },
          {
            file: 'libs/shared/product/types/project.json',
            hash: 'c4d630da19998c6664c793aa9e1da2afb1520dc5',
          },
          {
            file: 'libs/shared/product/types/README.md',
            hash: 'a3308045207635951262c7c81e93c4afafb484c4',
          },
          {
            file: 'libs/shared/product/types/src/index.ts',
            hash: '6b3cdd251890a858bace2be04ff2ef2920d68b76',
          },
          {
            file: 'libs/shared/product/types/src/lib/shared-product-types.ts',
            hash: '4f99c082564a63944be3e035c4ef47cc060b3af9',
          },
          {
            file: 'libs/shared/product/types/tsconfig.json',
            hash: 'e7879c9efcfa2e1c35b5373b03b4b7ea276795ac',
          },
          {
            file: 'libs/shared/product/types/tsconfig.lib.json',
            hash: 'a174cb09c30e46285517c7308247d602414aa63f',
          },
        ],
      },
    },
    {
      name: 'shared-product-data',
      type: 'lib',
      data: {
        tags: ['type:data', 'scope:shared'],
        root: 'libs/shared/product/data',
        files: [
          {
            file: 'libs/shared/product/data/.babelrc',
            hash: '0cae4a9a81270d6cf3315436f594bf2fbd4fb3e2',
          },
          {
            file: 'libs/shared/product/data/.eslintrc.json',
            hash: '0576ff84e48f121399441a189bc1cd2a35fbca47',
          },
          {
            file: 'libs/shared/product/data/project.json',
            hash: '6cb1a1f6762f3e891398ec2df3036f74b138db2e',
          },
          {
            file: 'libs/shared/product/data/README.md',
            hash: 'a433a7f8582e93329c762709f617d5d146b763f1',
          },
          {
            file: 'libs/shared/product/data/src/index.ts',
            hash: '0818cd09cdd02861b3319fd08cfcd2abf29539b4',
          },
          {
            file: 'libs/shared/product/data/src/lib/product-data.mock.ts',
            hash: 'dcd7b7730bcd977d83eec2b8c8a27980ed605d58',
          },
          {
            file: 'libs/shared/product/data/src/lib/shared-product-data.ts',
            hash: 'eea248a1d99f1b5385f489a9ff7cbe8d947dd5aa',
            deps: ['shared-product-types'],
          },
          {
            file: 'libs/shared/product/data/src/testing.ts',
            hash: 'd80ae5191bdb9c730883065e07d95876d1a701c9',
          },
          {
            file: 'libs/shared/product/data/tsconfig.json',
            hash: 'e7879c9efcfa2e1c35b5373b03b4b7ea276795ac',
          },
          {
            file: 'libs/shared/product/data/tsconfig.lib.json',
            hash: 'a174cb09c30e46285517c7308247d602414aa63f',
          },
        ],
      },
    },
    {
      name: 'products-home-page',
      type: 'lib',
      data: {
        tags: ['scope:products', 'type:feature'],
        root: 'libs/products/home-page',
        files: [
          {
            file: 'libs/products/home-page/.eslintrc.json',
            hash: '9384bd8cee7cccbdde43abbc051ecf6cef35b256',
          },
          {
            file: 'libs/products/home-page/jest.config.js',
            hash: '6de15e0e0f1e3de70757fbac71d98c25cd9bfbed',
          },
          {
            file: 'libs/products/home-page/project.json',
            hash: '157f0e2f3e24ef1397362f0704c1b8849361767a',
          },
          {
            file: 'libs/products/home-page/README.md',
            hash: '722e60a3b9690fe6d2bc9f0e85b114a3048ca9d0',
          },
          {
            file: 'libs/products/home-page/src/index.ts',
            hash: '0e7f9ca26e66d7aa35a83cd8e957248ef5bb1240',
          },
          {
            file: 'libs/products/home-page/src/lib/home-page/home-page.component.html',
            hash: '8bd27770e5974269e766d95762fef74b5bd89841',
          },
          {
            file: 'libs/products/home-page/src/lib/home-page/home-page.component.scss',
            hash: 'ba4f1655a2c0791670384de48367caded0d6e601',
          },
          {
            file: 'libs/products/home-page/src/lib/home-page/home-page.component.spec.ts',
            hash: '66eb455b3e71b30c0bd16a4769cc34b81133b667',
            deps: [
              'npm:@angular/core',
              'npm:@angular/router',
              'npm:@ngrx/store',
              'shared-product-state',
            ],
          },
          {
            file: 'libs/products/home-page/src/lib/home-page/home-page.component.ts',
            hash: 'bd081eedbf10a2cd04c95609379d131e5e8d60a1',
            deps: [
              'npm:@angular/core',
              'npm:@ngrx/store',
              'npm:rxjs',
              'shared-product-state',
              'shared-product-types',
              'shared-product-ui',
            ],
          },
          {
            file: 'libs/products/home-page/src/lib/products-home-page.module.spec.ts',
            hash: '1d9cf1c8c46ebe69275def67ccf6f04c0f967856',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/products/home-page/src/lib/products-home-page.module.ts',
            hash: 'db6a06b6d0063c4a1fff6c7953be09a680592184',
            deps: [
              'npm:@angular/common',
              'npm:@angular/core',
              'npm:@angular/router',
              'shared-product-state',
            ],
          },
          {
            file: 'libs/products/home-page/src/test-setup.ts',
            hash: 'f64f15cae181c8297512e03e30b2d2f7b7223f5b',
            deps: ['npm:jest-preset-angular', 'npm:document-register-element'],
          },
          {
            file: 'libs/products/home-page/tsconfig.json',
            hash: '1b6ee0bf6f3df276fbfc5c683aca2e02c6c6523a',
          },
          {
            file: 'libs/products/home-page/tsconfig.lib.json',
            hash: 'a86e8be7a68f3cc03c74c5a09390b33e2f776702',
          },
          {
            file: 'libs/products/home-page/tsconfig.spec.json',
            hash: '1f8e7f6c3e5a63e2af398d49fef36e6f6659fb7c',
          },
        ],
      },
    },
    {
      name: 'shared-cart-state',
      type: 'lib',
      data: {
        tags: ['scope:shared', 'type:state'],
        root: 'libs/shared/cart/state',
        files: [
          {
            file: 'libs/shared/cart/state/.babelrc',
            hash: '0cae4a9a81270d6cf3315436f594bf2fbd4fb3e2',
          },
          {
            file: 'libs/shared/cart/state/.eslintrc.json',
            hash: '57932578e6df8f4a907a78abde0e3f5a7d84fc6f',
          },
          {
            file: 'libs/shared/cart/state/jest.config.js',
            hash: 'fd7e6f4c5d6aeaac4776a793432321ffd7c867a1',
          },
          {
            file: 'libs/shared/cart/state/project.json',
            hash: 'f27bfc806b976a518617eb9062b55be2e8226f9a',
          },
          {
            file: 'libs/shared/cart/state/README.md',
            hash: '38627fdbb83e5984c84fd1d5895815907d4dea30',
          },
          {
            file: 'libs/shared/cart/state/src/index.ts',
            hash: 'a3b86be1438b7b7cdccb3bc7e76aadfe577fc285',
          },
          {
            file: 'libs/shared/cart/state/src/lib/+state/cart.actions.ts',
            hash: '3cff41aacb72ee50cf5844662ac1b77b78805ac4',
            deps: ['npm:@ngrx/store'],
          },
          {
            file: 'libs/shared/cart/state/src/lib/+state/cart.reducer.spec.ts',
            hash: 'b375658695c3ead82ffc558d5dfbf30c42fc84d6',
          },
          {
            file: 'libs/shared/cart/state/src/lib/+state/cart.reducer.ts',
            hash: '0583a02da1ed94e29a9ab4b8f310bad9c069962c',
          },
          {
            file: 'libs/shared/cart/state/src/lib/+state/cart.selectors.spec.ts',
            hash: 'dc5a869677b1db84446492fc6a1045cd33c0d661',
            deps: ['shared-product-data', 'shared-product-state'],
          },
          {
            file: 'libs/shared/cart/state/src/lib/+state/cart.selectors.ts',
            hash: '5ff6eaec6dc3d341327f2e46c5fffa30a924ba71',
            deps: ['shared-product-state'],
          },
          {
            file: 'libs/shared/cart/state/src/lib/shared-cart-state.module.spec.ts',
            hash: 'caef812f0d76e3f3ca6849d53dc0d011cd2e902a',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/shared/cart/state/src/lib/shared-cart-state.module.ts',
            hash: '180d2c45ab25f0eeb6b15378bd43b85874f5b318',
            deps: [
              'npm:@angular/common',
              'npm:@angular/core',
              'npm:@ngrx/store',
            ],
          },
          {
            file: 'libs/shared/cart/state/src/react.ts',
            hash: '38949f62ee8e55134c593a046372bc89ea58d266',
          },
          {
            file: 'libs/shared/cart/state/src/test-setup.ts',
            hash: '1100b3e8a6ed08f4b5c27a96471846d57023c320',
            deps: ['npm:jest-preset-angular'],
          },
          {
            file: 'libs/shared/cart/state/tsconfig.json',
            hash: 'd32f55e3999447ae24e89f0e76d8c3128113c85e',
          },
          {
            file: 'libs/shared/cart/state/tsconfig.lib.json',
            hash: '6d8381892432362a9efb491476651c6b8cc2d1a2',
          },
          {
            file: 'libs/shared/cart/state/tsconfig.spec.json',
            hash: '6089636545924f32531e4bd15d9d031aa84f63e0',
          },
        ],
      },
    },
    {
      name: 'shared-product-ui',
      type: 'lib',
      data: {
        tags: ['scope:shared', 'type:ui'],
        root: 'libs/shared/product/ui',
        files: [
          {
            file: 'libs/shared/product/ui/.babelrc',
            hash: '0cae4a9a81270d6cf3315436f594bf2fbd4fb3e2',
          },
          {
            file: 'libs/shared/product/ui/.eslintrc.json',
            hash: 'f27e8c332d321de90c56395d24b45a2b68d1b52b',
          },
          {
            file: 'libs/shared/product/ui/jest.config.js',
            hash: 'd032303d104ce2fe92d12893c1c149e4f9fb4b45',
          },
          {
            file: 'libs/shared/product/ui/project.json',
            hash: '70dee7ca7a82443e9b4b32a403cd558884f38fd8',
          },
          {
            file: 'libs/shared/product/ui/README.md',
            hash: 'e6943fb94ddb0a94513d68f4586098581172fcf4',
          },
          {
            file: 'libs/shared/product/ui/src/index.ts',
            hash: '58b274ad76843b50333fc6d5cb9272d0f17d901d',
          },
          {
            file: 'libs/shared/product/ui/src/lib/product-price/product-price.element.spec.ts',
            hash: '34be17f44c09cfa01a9fd4dc7ada68c7bafded6e',
          },
          {
            file: 'libs/shared/product/ui/src/lib/product-price/product-price.element.ts',
            hash: '8c626d1213b1b47bc2bdf221554fb38bb9f9bfae',
            deps: ['shared-jsxify'],
          },
          {
            file: 'libs/shared/product/ui/src/test-setup.ts',
            hash: 'd8508d703266e7390b30189d3cf7fec7a70b198c',
            deps: ['npm:document-register-element'],
          },
          {
            file: 'libs/shared/product/ui/tsconfig.json',
            hash: 'd32f55e3999447ae24e89f0e76d8c3128113c85e',
          },
          {
            file: 'libs/shared/product/ui/tsconfig.lib.json',
            hash: 'bb348accf6ee25f0e83651f3058a2f7bc23e9be1',
          },
          {
            file: 'libs/shared/product/ui/tsconfig.spec.json',
            hash: '1f4ea6984a42a3e2396a474de39621dfdf02175c',
          },
        ],
      },
    },
    {
      name: 'shared-e2e-utils',
      type: 'lib',
      data: {
        tags: ['scope:shared', 'type:e2e-utils'],
        root: 'libs/shared/e2e-utils',
        files: [
          {
            file: 'libs/shared/e2e-utils/.eslintrc.json',
            hash: 'b7d8fbb6b72b612119154a18b2142c8f41e1f6a5',
          },
          {
            file: 'libs/shared/e2e-utils/project.json',
            hash: '783ead0bf5e68083a9dbf390fa49bbd97ff7fa1a',
          },
          {
            file: 'libs/shared/e2e-utils/README.md',
            hash: '4864d1fe9daeac7441673144997eb93f38a451a7',
          },
          {
            file: 'libs/shared/e2e-utils/src/index.ts',
            hash: '5f637af2f9a45117b16185c0d2d49bb7ae082e8c',
          },
          {
            file: 'libs/shared/e2e-utils/src/lib/shared-e2e-utils.ts',
            hash: '69aae501c209457bd9a504344fcc262cb2c452a6',
          },
          {
            file: 'libs/shared/e2e-utils/tsconfig.json',
            hash: '662468f8e66527570a90c88435fb3fe322200c55',
          },
          {
            file: 'libs/shared/e2e-utils/tsconfig.lib.json',
            hash: '0fe9966358eb51092a1668ecb0795b6db52a538b',
          },
        ],
      },
    },
    {
      name: 'cart-cart-page',
      type: 'lib',
      data: {
        tags: ['scope:cart', 'type:feature'],
        root: 'libs/cart/cart-page',
        files: [
          {
            file: 'libs/cart/cart-page/.babelrc',
            hash: '2563bbc7a3a07754d9cce33fed581595cefca651',
          },
          {
            file: 'libs/cart/cart-page/.eslintrc.json',
            hash: '0790d98fc5188ef5b9707e0a47792b30e87f807f',
          },
          {
            file: 'libs/cart/cart-page/jest.config.js',
            hash: 'f526b301f8754df11afe4e46f4ed1357f6a06ec7',
          },
          {
            file: 'libs/cart/cart-page/project.json',
            hash: '1cc1eccfd227af5c75288e67528d76743d0efd5d',
          },
          {
            file: 'libs/cart/cart-page/README.md',
            hash: 'e849e84b78b7b1c409567b4dadebf54b1ef45ca6',
          },
          {
            file: 'libs/cart/cart-page/src/index.ts',
            hash: 'ad4674d7e1cfad04953cff1084cb229d81bcfa94',
          },
          {
            file: 'libs/cart/cart-page/src/lib/cart-cart-page/cart-cart-page.spec.tsx',
            hash: '496df785798bd335433efac1ce9b63f4837d8862',
            deps: ['npm:@testing-library/react'],
          },
          {
            file: 'libs/cart/cart-page/src/lib/cart-cart-page/cart-cart-page.tsx',
            hash: '384ca9a17a3379dfacf6a6c4fb672d0b6f223997',
            deps: [
              'npm:react',
              'npm:@emotion/styled',
              'shared-product-ui',
              'shared-cart-state',
              'shared-product-state',
            ],
          },
          {
            file: 'libs/cart/cart-page/src/test-setup.ts',
            hash: 'd8508d703266e7390b30189d3cf7fec7a70b198c',
            deps: ['npm:document-register-element'],
          },
          {
            file: 'libs/cart/cart-page/tsconfig.json',
            hash: 'cd38e3e04409f21cefb92c2531b7f539fc2db14d',
          },
          {
            file: 'libs/cart/cart-page/tsconfig.lib.json',
            hash: 'c6a0c23566ca982df78d0ee961e1cf1674793118',
          },
          {
            file: 'libs/cart/cart-page/tsconfig.spec.json',
            hash: 'cab0321d30317cad540f0f087e2c2caf670370fe',
          },
        ],
      },
    },
    {
      name: 'shared-assets',
      type: 'lib',
      data: {
        tags: ['type:assets', 'scope:shared'],
        root: 'libs/shared/assets',
        files: [
          {
            file: 'libs/shared/assets/project.json',
            hash: 'ed3a5761da20b48280dc7e572c888093d13cf37a',
          },
          {
            file: 'libs/shared/assets/README.md',
            hash: '11891734c3dc348bc38c587824ce3334fc9eb5f0',
          },
          {
            file: 'libs/shared/assets/src/assets/icons/github.png',
            hash: '73db1f61f3aa55fcaecbca896dbea067706bb7bd',
          },
          {
            file: 'libs/shared/assets/src/assets/images/a-clash-of-kings.jpg',
            hash: 'be2863c3a3eb291cac921028af72604af00dd362',
          },
          {
            file: 'libs/shared/assets/src/assets/images/a-dance-with-dragons.jpg',
            hash: 'ea6706f36b4e3a579bd97b8e506fbc7345ef8635',
          },
          {
            file: 'libs/shared/assets/src/assets/images/a-feast-for-crows.jpg',
            hash: '1bd6e8f85bb741aca00d0bf9d6c87ddb1e96c97e',
          },
          {
            file: 'libs/shared/assets/src/assets/images/a-game-of-thrones.jpg',
            hash: '2fc1452579133fbc3e02c822e5d14beeaae09d0d',
          },
          {
            file: 'libs/shared/assets/src/assets/images/a-storm-of-swords.jpg',
            hash: '0abd5a19762f2766ab86c192eafad4acf1ca66db',
          },
          {
            file: 'libs/shared/assets/src/favicon.ico',
            hash: '317ebcb2336e0833a22dddf0ab287849f26fda57',
          },
        ],
      },
    },
    {
      name: 'shared-header',
      type: 'lib',
      data: {
        tags: ['scope:shared', 'type:ui'],
        root: 'libs/shared/header',
        files: [
          {
            file: 'libs/shared/header/.babelrc',
            hash: '0cae4a9a81270d6cf3315436f594bf2fbd4fb3e2',
          },
          {
            file: 'libs/shared/header/.eslintrc.json',
            hash: 'c1ddeb2aa5bf964a05e628e2137c4ac513c59a7e',
          },
          {
            file: 'libs/shared/header/index.scss',
            hash: '09fd44fea0cd18509c0e77aa5522c65590df0448',
          },
          {
            file: 'libs/shared/header/jest.config.js',
            hash: '563ed547b97bd2f478059633b6cd63d5cf7e570c',
          },
          {
            file: 'libs/shared/header/project.json',
            hash: 'ca88f6b6dbea994232e6b79861fffcbe0e0e9290',
          },
          {
            file: 'libs/shared/header/README.md',
            hash: '7a9c74dbe1c14e5b710aa03cf0a0013ebdce39e2',
          },
          {
            file: 'libs/shared/header/src/index.ts',
            hash: '720634b61b9010b5ba7a58169a8f1e99853aa604',
          },
          {
            file: 'libs/shared/header/src/lib/header/header.element.scss',
            hash: 'd13956172eb5f11b6fe4f5e616c057be3bc12578',
          },
          {
            file: 'libs/shared/header/src/lib/header/header.element.spec.ts',
            hash: '2e410dcfcce6c2e15cdbe8382463d64bc2724af6',
          },
          {
            file: 'libs/shared/header/src/lib/header/header.element.ts',
            hash: '788a1512fb3b61bb9d431c16656781132ac5c530',
            deps: ['shared-jsxify'],
          },
          {
            file: 'libs/shared/header/src/test-setup.ts',
            hash: 'd8508d703266e7390b30189d3cf7fec7a70b198c',
            deps: ['npm:document-register-element'],
          },
          {
            file: 'libs/shared/header/tsconfig.json',
            hash: '1b6ee0bf6f3df276fbfc5c683aca2e02c6c6523a',
          },
          {
            file: 'libs/shared/header/tsconfig.lib.json',
            hash: '93dd59b93ff9d0289ecfb437bc1a73c18d3ecb36',
          },
          {
            file: 'libs/shared/header/tsconfig.spec.json',
            hash: 'cab0321d30317cad540f0f087e2c2caf670370fe',
          },
        ],
      },
    },
    {
      name: 'shared-jsxify',
      type: 'lib',
      data: {
        tags: ['scope:shared', 'type:types'],
        root: 'libs/shared/jsxify',
        files: [
          {
            file: 'libs/shared/jsxify/.babelrc',
            hash: '0cae4a9a81270d6cf3315436f594bf2fbd4fb3e2',
          },
          {
            file: 'libs/shared/jsxify/.eslintrc.json',
            hash: '956fcc640babc6d52c6c2370616b71d5fa4b5a7a',
          },
          {
            file: 'libs/shared/jsxify/project.json',
            hash: '3dd4e5f2811d3377248f9c0dae8eba489391fa7e',
          },
          {
            file: 'libs/shared/jsxify/README.md',
            hash: '80d053e1b10cef1a553c10a78969b7f5b77dc53a',
          },
          {
            file: 'libs/shared/jsxify/src/index.ts',
            hash: 'c83bdb671f875f391277ac69a5468fab6a07b2af',
          },
          {
            file: 'libs/shared/jsxify/src/lib/shared-jsxify.ts',
            hash: '2343cbc0ee3a4399b277720ae516575b00415f4e',
          },
          {
            file: 'libs/shared/jsxify/tsconfig.json',
            hash: '98a51da43d2d67b63a8e74ae657686858277e9f7',
          },
          {
            file: 'libs/shared/jsxify/tsconfig.lib.json',
            hash: '0fe9966358eb51092a1668ecb0795b6db52a538b',
          },
        ],
      },
    },
    {
      name: 'shared-styles',
      type: 'lib',
      data: {
        tags: ['scope:shared', 'type:styles'],
        root: 'libs/shared/styles',
        files: [
          {
            file: 'libs/shared/styles/project.json',
            hash: 'b5a6f584bc941709d29e6adc4d5ca56ce30ae01c',
          },
          {
            file: 'libs/shared/styles/README.md',
            hash: '726adf41353f106db057050b4b8d0e8784c6eed5',
          },
          {
            file: 'libs/shared/styles/src/index.scss',
            hash: '4242c2389d84fc3062a84cddb0f6b94427304803',
          },
          {
            file: 'libs/shared/styles/src/lib/global.scss',
            hash: '55caa35d877ea8028f97134fa985a0b7e772f963',
          },
        ],
      },
    },
    {
      name: 'products-e2e',
      type: 'e2e',
      data: {
        tags: ['scope:products', 'type:e2e'],
        root: 'apps/products-e2e',
        files: [
          {
            file: 'apps/products-e2e/.eslintrc.json',
            hash: 'e7caab63fbef52bb000835acbb23935cb48203a0',
          },
          {
            file: 'apps/products-e2e/cypress.json',
            hash: 'ee5af7e5518edbfda16020d5b0b543542438788c',
          },
          {
            file: 'apps/products-e2e/project.json',
            hash: 'a6433cd42925d342ece35e788c3f2d43263a26e6',
          },
          {
            file: 'apps/products-e2e/src/fixtures/example.json',
            hash: '294cbed6ce9e0b948b787452e8676aee486cb3be',
          },
          {
            file: 'apps/products-e2e/src/integration/app.spec.ts',
            hash: '00b7341abcfcdaf897c7eb31f6a79a297fc01af0',
            deps: ['shared-e2e-utils'],
          },
          {
            file: 'apps/products-e2e/src/support/app.po.ts',
            hash: 'd5ac94199b3e68be5782c883344f00c90bfd07a9',
          },
          {
            file: 'apps/products-e2e/src/support/commands.ts',
            hash: 'ca4d256f3eb15dfabad1f5760c9b2d0ceb4c24b9',
          },
          {
            file: 'apps/products-e2e/src/support/index.ts',
            hash: '3d469a6b6cf31eb66117d73e278bcf74f398f1db',
          },
          {
            file: 'apps/products-e2e/tsconfig.json',
            hash: 'c4f818ecd40fbce82c3e08bf25cde3043970f8f3',
          },
        ],
      },
    },
    {
      name: 'cart-e2e',
      type: 'e2e',
      data: {
        tags: ['scope:cart', 'type:e2e'],
        root: 'apps/cart-e2e',
        files: [
          {
            file: 'apps/cart-e2e/.eslintrc.json',
            hash: '082395fbd03ae178157f9ebd4d374d208fd254f8',
          },
          {
            file: 'apps/cart-e2e/cypress.json',
            hash: '49dc3499df795aad422a2e3f8d09a5e2352bf686',
          },
          {
            file: 'apps/cart-e2e/project.json',
            hash: '1e9d604fb96854df9b579f00144e78c4a81def10',
          },
          {
            file: 'apps/cart-e2e/src/fixtures/example.json',
            hash: '294cbed6ce9e0b948b787452e8676aee486cb3be',
          },
          {
            file: 'apps/cart-e2e/src/integration/app.spec.ts',
            hash: 'caae6c7558f1bdfa052af97eb192ad3ef9673921',
            deps: ['shared-e2e-utils'],
          },
          {
            file: 'apps/cart-e2e/src/support/app.po.ts',
            hash: 'c29f04f1c8d7c8722fbf705b3d951333c4fb95fc',
          },
          {
            file: 'apps/cart-e2e/src/support/commands.ts',
            hash: 'ca4d256f3eb15dfabad1f5760c9b2d0ceb4c24b9',
          },
          {
            file: 'apps/cart-e2e/src/support/index.ts',
            hash: '3d469a6b6cf31eb66117d73e278bcf74f398f1db',
          },
          {
            file: 'apps/cart-e2e/tsconfig.json',
            hash: 'c4f818ecd40fbce82c3e08bf25cde3043970f8f3',
          },
        ],
      },
    },
    {
      name: 'products',
      type: 'app',
      data: {
        tags: ['type:app', 'scope:products'],
        root: 'apps/products',
        files: [
          {
            file: 'apps/products/.browserslistrc',
            hash: '80848532e47d58cc7a4b618f600b438960f9f045',
          },
          {
            file: 'apps/products/.eslintrc.json',
            hash: '09bf85ffde1b09ba5ee6a114f2ceeb11a4a892d1',
          },
          {
            file: 'apps/products/jest.config.js',
            hash: '84f9579521f246fff44012f9ae4fd51c5d2d44f0',
          },
          {
            file: 'apps/products/project.json',
            hash: '17317c7731b0d92b1a606bd2998b48729579682f',
          },
          {
            file: 'apps/products/src/_redirects',
            hash: '7cbf76be95b720c89c7602ff8497c030004460a0',
          },
          {
            file: 'apps/products/src/app/app.component.html',
            hash: 'bb3f473b9bbce44012333d96f9e2a741f11eeda7',
          },
          {
            file: 'apps/products/src/app/app.component.scss',
            hash: '6c2cb68a16e0dbc48ec5497bffe3db6c83a08171',
          },
          {
            file: 'apps/products/src/app/app.component.spec.ts',
            hash: 'b611bf15a7302118c40010c47faa14a6ee70d714',
            deps: ['npm:@angular/core', 'npm:@angular/router'],
          },
          {
            file: 'apps/products/src/app/app.component.ts',
            hash: '67f74e1fe6f32700ab9eb84c28e8c5eb0a3816e6',
            deps: ['npm:@angular/core', 'shared-header'],
          },
          {
            file: 'apps/products/src/app/app.module.ts',
            hash: 'b83f636e0c945792e77ac5634ef6641041bc5e7a',
            deps: [
              'npm:@angular/core',
              'npm:@angular/platform-browser',
              'npm:@angular/router',
              'npm:@ngrx/store',
              'products-home-page',
              'products-product-detail-page',
            ],
          },
          {
            file: 'apps/products/src/assets/.gitkeep',
            hash: 'e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
          },
          {
            file: 'apps/products/src/environments/environment.prod.ts',
            hash: '3612073bc31cd4c1f5d6cbb00318521e9a61bd8a',
          },
          {
            file: 'apps/products/src/environments/environment.ts',
            hash: '7b4f817adb754769ca126a939d48ac4b0850489d',
          },
          {
            file: 'apps/products/src/favicon.ico',
            hash: '8081c7ceaf2be08bf59010158c586170d9d2d517',
          },
          {
            file: 'apps/products/src/index.html',
            hash: 'ab6b7852619b9523b4bce50a50f04f4b92612878',
          },
          {
            file: 'apps/products/src/main.ts',
            hash: 'fa4e0aef33721b84c2cc9f415da4770e770a68b4',
            deps: [
              'npm:@angular/core',
              'npm:@angular/platform-browser-dynamic',
            ],
          },
          {
            file: 'apps/products/src/polyfills.ts',
            hash: 'ba5c6215cc8aa033abfbd17e0b0192123796b459',
            deps: ['npm:zone.js'],
          },
          {
            file: 'apps/products/src/test-setup.ts',
            hash: 'f64f15cae181c8297512e03e30b2d2f7b7223f5b',
            deps: ['npm:jest-preset-angular', 'npm:document-register-element'],
          },
          {
            file: 'apps/products/tsconfig.app.json',
            hash: '47e4f8225ea7c019c84f7c5f1809237f34c7b0a9',
          },
          {
            file: 'apps/products/tsconfig.editor.json',
            hash: '20c4afdbf437457984afcb236d4b5e588aec858a',
          },
          {
            file: 'apps/products/tsconfig.json',
            hash: '4ef4491ede9de763393e9ab15febd9091fbb1ca5',
          },
          {
            file: 'apps/products/tsconfig.spec.json',
            hash: 'bc90aab0938ab8ffbc32039db0751502460d8794',
          },
        ],
      },
    },
    {
      name: 'cart',
      type: 'app',
      data: {
        tags: ['type:app', 'scope:cart'],
        root: 'apps/cart',
        files: [
          {
            file: 'apps/cart/.babelrc',
            hash: '61641ec8ac3659e204441c80bb06defe323e3110',
          },
          {
            file: 'apps/cart/.eslintrc.json',
            hash: '4e6e0b82073fa77dc1c5b2f926d5d9d5d3cf2585',
          },
          {
            file: 'apps/cart/browserlist',
            hash: '37371cb04b9f1986d952499cdf9613c9d5d8ca8c',
          },
          {
            file: 'apps/cart/jest.config.js',
            hash: 'bc0caa77b0c4f8593bd05bd8c52ec4e75a0bbbc8',
          },
          {
            file: 'apps/cart/project.json',
            hash: '486a43541949283d79b3cc4fc446641f32598096',
          },
          {
            file: 'apps/cart/src/_redirects',
            hash: '50d93f23ab427b2911555db1a5c9a023293f470a',
          },
          {
            file: 'apps/cart/src/app/app.spec.tsx',
            hash: 'be06392eb51b8d8fd62a0c3dc8c4fa3c8ee76aca',
            deps: ['npm:react-router-dom', 'npm:@testing-library/react'],
          },
          {
            file: 'apps/cart/src/app/app.tsx',
            hash: '6da2083c9105390d673a1b26622e6953dc1f3e47',
            deps: ['npm:react-router-dom', 'shared-header', 'cart-cart-page'],
          },
          {
            file: 'apps/cart/src/assets/.gitkeep',
            hash: 'e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
          },
          {
            file: 'apps/cart/src/environments/environment.prod.ts',
            hash: '3612073bc31cd4c1f5d6cbb00318521e9a61bd8a',
          },
          {
            file: 'apps/cart/src/environments/environment.ts',
            hash: 'd9370e924b51bc67ecddee7fc3b6693681a324b6',
          },
          {
            file: 'apps/cart/src/favicon.ico',
            hash: 'a11777cc471a4344702741ab1c8a588998b1311a',
          },
          {
            file: 'apps/cart/src/index.html',
            hash: '1a7a74ec69f2b7a86ee7918f412e25edff23ebfb',
          },
          {
            file: 'apps/cart/src/main.tsx',
            hash: '778281c772cc09a87375299eaba2f8be0c940b37',
            deps: ['npm:react-dom', 'npm:react-router-dom'],
          },
          {
            file: 'apps/cart/src/polyfills.ts',
            hash: '83926853099fe077c00663db9909f25c9a3b769d',
          },
          {
            file: 'apps/cart/src/test-setup.ts',
            hash: 'd8508d703266e7390b30189d3cf7fec7a70b198c',
            deps: ['npm:document-register-element'],
          },
          {
            file: 'apps/cart/tsconfig.app.json',
            hash: 'eeaffc3e153035823dd77eef7bbbd46fb742a997',
          },
          {
            file: 'apps/cart/tsconfig.json',
            hash: 'e7d37b3ecd2df29a7bf98d03d015f73dbaf0e723',
          },
          {
            file: 'apps/cart/tsconfig.spec.json',
            hash: 'ced70a327f2a70caa5ab84f33561b415a51cb60f',
          },
        ],
      },
    },
  ],
  dependencies: {
    'products-product-detail-page': [
      {
        source: 'products-product-detail-page',
        target: 'shared-product-state',
        type: 'static',
      },
      {
        source: 'products-product-detail-page',
        target: 'shared-product-ui',
        type: 'static',
      },
    ],
    'shared-product-state': [
      {
        source: 'shared-product-state',
        target: 'shared-product-data',
        type: 'static',
      },
      {
        source: 'shared-product-state',
        target: 'shared-product-types',
        type: 'static',
      },
    ],
    'shared-product-types': [],
    'shared-product-data': [
      {
        source: 'shared-product-data',
        target: 'shared-product-types',
        type: 'static',
      },
    ],
    'products-home-page': [
      {
        source: 'products-home-page',
        target: 'shared-product-state',
        type: 'static',
      },
      {
        source: 'products-home-page',
        target: 'shared-product-types',
        type: 'static',
      },
      {
        source: 'products-home-page',
        target: 'shared-product-ui',
        type: 'static',
      },
    ],
    'shared-cart-state': [
      {
        source: 'shared-cart-state',
        target: 'shared-product-data',
        type: 'static',
      },
      {
        source: 'shared-cart-state',
        target: 'shared-product-state',
        type: 'static',
      },
    ],
    'shared-product-ui': [
      {
        source: 'shared-product-ui',
        target: 'shared-jsxify',
        type: 'static',
      },
    ],
    'shared-e2e-utils': [],
    'cart-cart-page': [
      {
        source: 'cart-cart-page',
        target: 'shared-product-ui',
        type: 'static',
      },
      {
        source: 'cart-cart-page',
        target: 'shared-cart-state',
        type: 'static',
      },
      {
        source: 'cart-cart-page',
        target: 'shared-product-state',
        type: 'static',
      },
    ],
    'shared-assets': [],
    'shared-header': [
      {
        source: 'shared-header',
        target: 'shared-jsxify',
        type: 'static',
      },
    ],
    'shared-jsxify': [],
    'shared-styles': [],
    'products-e2e': [
      {
        source: 'products-e2e',
        target: 'products',
        type: 'implicit',
      },
      {
        source: 'products-e2e',
        target: 'shared-e2e-utils',
        type: 'static',
      },
    ],
    'cart-e2e': [
      {
        source: 'cart-e2e',
        target: 'cart',
        type: 'implicit',
      },
      {
        source: 'cart-e2e',
        target: 'shared-e2e-utils',
        type: 'static',
      },
    ],
    products: [
      {
        source: 'products',
        target: 'shared-assets',
        type: 'implicit',
      },
      {
        source: 'products',
        target: 'shared-styles',
        type: 'implicit',
      },
      {
        source: 'products',
        target: 'shared-header',
        type: 'static',
      },
      {
        source: 'products',
        target: 'products-home-page',
        type: 'static',
      },
      {
        source: 'products',
        target: 'products-product-detail-page',
        type: 'static',
      },
    ],
    cart: [
      {
        source: 'cart',
        target: 'shared-assets',
        type: 'implicit',
      },
      {
        source: 'cart',
        target: 'shared-styles',
        type: 'implicit',
      },
      {
        source: 'cart',
        target: 'shared-header',
        type: 'static',
      },
      {
        source: 'cart',
        target: 'cart-cart-page',
        type: 'static',
      },
    ],
  },
  layout: {
    appsDir: 'apps',
    libsDir: 'libs',
  },
  affected: [],
  focus: null,
  groupByFolder: false,
  exclude: [],
};
