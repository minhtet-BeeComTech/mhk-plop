const requireField = fieldName => {
  return value => {
    if (String(value).length === 0) {
      return fieldName + ' is required'
    }
    return true
  }
}

const PlopFile = plop => {
  plop.setGenerator('store', {
    description: 'Create a react redux store',
    prompts: [
      {
        type: 'input',
        name: 'actionFileName',
        message: 'What is your action file name?',
        validate: requireField('actionFileName')
      },
      {
        type: 'input',
        name: 'reducerFileName',
        message: 'What is your reducer file name?',
        validate: requireField('reducerFileName')
      },
      {
        type: 'input',
        name: 'getActionName',
        message: 'What is your get action name?',
        validate: requireField('getActionName')
      },
      {
        type: 'input',
        name: 'createActionName',
        message: 'What is your create action name?',
        validate: requireField('createActionName')
      },
      {
        type: 'input',
        name: 'updateActionName',
        message: 'What is your update action name?',
        validate: requireField('updateActionName')
      },
      {
        type: 'input',
        name: 'deleteActionName',
        message: 'What is your delete action name?',
        validate: requireField('deleteActionName')
      }
    ],
    actions: data => {
      return [
        // {
        //   type: 'add',
        //   path: `src/store/actions/typehandle.action.js`,
        //   templateFile: 'node_modules/mhk-plop/plop-templates/action/typehandle.action.js.hbs',
        // },
        {
          type: 'add',
          path: `src/store/actions/{{lowerCase actionFileName}}.action.js`,
          templateFile: 'node_modules/mhk-plop/plop-templates/action/action.action.js.hbs',
        },
        {
          type: 'add',
          path: 'src/store/actions/index.js',
          templateFile: 'node_modules/mhk-plop/plop-templates/action/index.js.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/store/actions/index.js',
          pattern: `/* PLOP_INJECT_ACTION_EXPORT */`,
          template: `export { default as {{camelCase actionFileName}} } from './{{lowerCase actionFileName}}.action'`,
        },
        {
          type: 'add',
          path: `src/store/reducer/{{lowerCase reducerFileName}}.reducer.js`,
          templateFile: 'node_modules/mhk-plop/plop-templates/reducer/reducer.reducer.js.hbs',
        },
        {
          type: 'add',
          path: 'src/store/reducer/root.reducer.js',
          templateFile: 'node_modules/mhk-plop/plop-templates/reducer/root.reducer.js.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/store/reducer/root.reducer.js',
          pattern: `/* PLOP_INJECT_REDUCER_IMPORT */`,
          template: `import {{camelCase reducerFileName}} from  './{{lowerCase reducerFileName}}.reducer'`,
        },
        {
          type: 'append',
          path: 'src/store/reducer/root.reducer.js',
          pattern: `/* PLOP_INJECT_REDUCER_EXPORT */`,
          template: `\t{{camelCase reducerFileName}},`,
        },
      ]
    }
  })

  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'folderName',
        message: 'What is your folder name?',
        validate: requireField('folderName')
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'What is your file name?',
        validate: requireField('fileName')
      },
    ],
    actions: data => {
      return [
        {
          type: 'add',
          path: `src/components/{{lowerCase folderName}}/{{pascalCase fileName}}.jsx`,
          templateFile: 'node_modules/mhk-plop/plop-templates/component/component.jsx.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{lowerCase folderName}}/style.scss',
          templateFile: 'node_modules/mhk-plop/plop-templates/component/style.scss.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/components/{{lowerCase folderName}}/style.scss',
          pattern: `/* PLOP_INJECT_COMPONENT_STYLE_EXPORT */`,
          template: `.{{dashCase fileName}}-com{ }`,
        },
        {
          type: 'add',
          path: 'src/components/{{lowerCase folderName}}/index.jsx',
          templateFile: 'node_modules/mhk-plop/plop-templates/component/index.jsx.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/components/{{lowerCase folderName}}/index.jsx',
          pattern: `/* PLOP_INJECT_COMPONENT_EXPORT */`,
          template: `export * from './{{pascalCase fileName}}'`,
        },
        {
          type: 'add',
          path: 'src/components/index.jsx',
          templateFile: 'node_modules/mhk-plop/plop-templates/component/index.jsx.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/components/index.jsx',
          pattern: `/* PLOP_INJECT_COMPONENT_EXPORT */`,
          template: `export * from './{{lowerCase folderName}}'`,
        },
      ]
    }
  })

  plop.setGenerator('singlecomponent', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'folderName',
        message: 'What is your already folder name?',
        validate: requireField('folderName')
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'What is your file name?',
        validate: requireField('fileName')
      },
    ],
    actions: data => {
      return [
        {
          type: 'add',
          path: `src/component/{{lowerCase folderName}}/{{pascalCase fileName}}.jsx`,
          templateFile: 'node_modules/mhk-plop/plop-templates/component/component.jsx.hbs',
        },
        {
          type: 'add',
          path: 'src/component/{{lowerCase folderName}}/style.scss',
          templateFile: 'node_modules/mhk-plop/plop-templates/component/style.scss.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/component/{{lowerCase folderName}}/style.scss',
          pattern: `/* PLOP_INJECT_COMPONENT_STYLE_EXPORT */`,
          template: `.{{dashCase fileName}}-com{ }`,
        },
        {
          type: 'add',
          path: 'src/component/{{lowerCase folderName}}/index.jsx',
          templateFile: 'node_modules/mhk-plop/plop-templates/component/index.jsx.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/component/{{lowerCase folderName}}/index.jsx',
          pattern: `/* PLOP_INJECT_COMPONENT_EXPORT */`,
          template: `export * from './{{pascalCase fileName}}'`,
        }
      ]
    }
  })

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'folderName',
        message: 'What is your folder name?',
        validate: requireField('folderName')
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'What is your file name?',
        validate: requireField('fileName')
      },
    ],
    actions: data => {
      return [
        {
          type: 'add',
          path: `src/page/{{lowerCase folderName}}/{{pascalCase fileName}}.jsx`,
          templateFile: 'node_modules/mhk-plop/plop-templates/page/page.jsx.hbs',
        },
        {
          type: 'add',
          path: 'src/page/{{lowerCase folderName}}/style.scss',
          templateFile: 'node_modules/mhk-plop/plop-templates/page/style.scss.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/page/{{lowerCase folderName}}/style.scss',
          pattern: `/* PLOP_INJECT_PAGE_STYLE_EXPORT */`,
          template: `.{{dashCase fileName}}-section{ }`,
        },
        {
          type: 'add',
          path: 'src/page/{{lowerCase folderName}}/index.jsx',
          templateFile: 'node_modules/mhk-plop/plop-templates/page/index.jsx.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/page/{{lowerCase folderName}}/index.jsx',
          pattern: `/* PLOP_INJECT_PAGE_EXPORT */`,
          template: `export * from './{{pascalCase fileName}}'`,
        },
        {
          type: 'add',
          path: 'src/router/route.jsx',
          templateFile: 'node_modules/mhk-plop/plop-templates/router/route.jsx.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/router/route.jsx',
          pattern: `/* PLOP_INJECT_MAIN_ROUTER_IMPORT */`,
          template: `import {{pascalCase folderName}}s, { /* PLOP_INJECT_{{upperCase folderName}}_ROUTER_IMPORT */ {{pascalCase fileName}} } from '@page/{{lowerCase folderName}}'`,
        },
        {
          type: 'append',
          path: 'src/router/route.jsx',
          pattern: `/* PLOP_INJECT_MAIN_ROUTER_EXPORT */`,
          template: `
          {
            component: {{pascalCase folderName}}s,
            path: '/{{dashCase folderName}}',
            routes: [
              /* PLOP_INJECT_{{upperCase folderName}}_ROUTER_EXPORT */
              {
                component: {{pascalCase fileName}},
                path: '/{{dashCase folderName}}/{{dashCase fileName}}',
                exact: true
              },
              {
                component: NotFound
              }
            ]
          },
          `
        }
      ]
    }
  })

  plop.setGenerator('singlepage', {
    description: 'Create a single page',
    prompts: [
      {
        type: 'input',
        name: 'folderName',
        message: 'What is your already folder name?',
        validate: requireField('folderName')
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'What is your file name?',
        validate: requireField('fileName')
      },
    ],
    actions: data => {
      return [
        {
          type: 'add',
          path: `src/page/{{lowerCase folderName}}/{{pascalCase fileName}}.jsx`,
          templateFile: 'node_modules/mhk-plop/plop-templates/page/page.jsx.hbs',
        },
        {
          type: 'add',
          path: 'src/page/{{lowerCase folderName}}/style.scss',
          templateFile: 'node_modules/mhk-plop/plop-templates/page/style.scss.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/page/{{lowerCase folderName}}/style.scss',
          pattern: `/* PLOP_INJECT_PAGE_STYLE_EXPORT */`,
          template: `.{{dashCase fileName}}-section{ }`,
        },
        {
          type: 'add',
          path: 'src/page/{{lowerCase folderName}}/index.jsx',
          templateFile: 'node_modules/mhk-plop/plop-templates/page/index.jsx.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/page/{{lowerCase folderName}}/index.jsx',
          pattern: `/* PLOP_INJECT_PAGE_EXPORT */`,
          template: `export * from './{{pascalCase fileName}}'`,
        },
        {
          type: 'add',
          path: 'src/router/route.jsx',
          templateFile: 'node_modules/mhk-plop/plop-templates/router/route.jsx.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/router/route.jsx',
          pattern: `/* PLOP_INJECT_${data.folderName.toUpperCase()}_ROUTER_IMPORT */`,
          template: `{{pascalCase fileName}},`,
        },
        {
          type: 'append',
          path: 'src/router/route.jsx',
          pattern: `/* PLOP_INJECT_${data.folderName.toUpperCase()}_ROUTER_EXPORT */`,
          template: `
          {
            component: {{pascalCase fileName}},
            path: '/{{dashCase folderName}}/{{dashCase fileName}}',
            exact: true
          },
          `
        },
      ]
    }
  })

  plop.setGenerator('styleconstant', {
    description: 'Create a style constant',
    prompts: [
      {
        type: 'input',
        name: 'fileName',
        message: 'What is your style constant file name?',
        validate: requireField('fileName')
      },
    ],
    actions: data => {
      return [
        {
          type: 'add',
          path: `src/constant/_{{pascalCase fileName}}.scss`,
          templateFile: 'node_modules/mhk-plop/plop-templates/styleconstant/_constant.scss.hbs',
        },
        {
          type: 'add',
          path: 'src/App.scss',
          templateFile: 'node_modules/mhk-plop/plop-templates/styleconstant/App.scss.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/App.scss',
          pattern: `/* PLOP_INJECT_STYLE_CONSTANT_EXPORT */`,
          template: `@import './constant/{{pascalCase fileName}}';`,
        }
      ]
    }
  })

  plop.setGenerator('controller', {
    description: 'Create a controller',
    prompts: [
      // {
      //   type: 'input',
      //   name: 'fileName',
      //   message: 'What is your style constant file name?',
      //   validate: requireField('fileName')
      // },
    ],
    actions: data => {
      return [
        {
          type: 'add',
          path: `src/controller/constant/Config.jsx`,
          templateFile: 'node_modules/mhk-plop/plop-templates/controller/Config.jsx.hbs',
        },
        {
          type: 'add',
          path: 'src/controller/constant/HttpClient.jsx',
          templateFile: 'node_modules/mhk-plop/plop-templates/controller/HttpClient.jsx.hbs',
        },
        {
          type: 'add',
          path: 'src/controller/constant/Routes.jsx',
          templateFile: 'node_modules/mhk-plop/plop-templates/controller/Routes.jsx.hbs',
        },
        {
          type: 'add',
          path: 'src/controller/index.jsx',
          templateFile: 'node_modules/mhk-plop/plop-templates/controller/index.jsx.hbs'
        }
      ]
    }
  })
}

module.exports = PlopFile