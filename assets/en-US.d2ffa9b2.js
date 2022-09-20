import{_ as l,p as c,f as d,h as r,M as t,q as e,S as n,P as s,at as p}from"./vue-router.esm-bundler.42d3c0c2.js";const o={components:{}},h={class:"varlet-site-doc"},i=t("h1",null,"Steps",-1),j=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"Steps is a navigation bar that guides users through the steps of a task.")],-1),v={class:"card"},m=t("h3",null,"Basic Usage",-1),g=t("p",null,[s("Use "),t("code",null,"active"),s(" prop to control the progress of step, value is index of step and is counted from "),t("code",null,"0"),s(".")],-1),u=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" active = ref("),t("span",{class:"hljs-number"},"0"),s(`)

`),t("span",{class:"hljs-keyword"},"const"),s(" next = "),t("span",{class:"hljs-function"},"() =>"),s(` {
  active.value = (active.value + `),t("span",{class:"hljs-number"},"1"),s(") % "),t("span",{class:"hljs-number"},"4"),s(`
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-steps"),s(),t("span",{class:"hljs-attr"},":active"),s("="),t("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("Step1"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("Step2"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("Step3"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("Step4"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-steps"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"next"'),s(">")]),s("next"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},_=t("h3",null,"Custom Style",-1),b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" active = ref("),t("span",{class:"hljs-number"},"0"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-steps"),s(`
    `),t("span",{class:"hljs-attr"},":active"),s("="),t("span",{class:"hljs-string"},'"active"'),s(`
    `),t("span",{class:"hljs-attr"},"active-color"),s("="),t("span",{class:"hljs-string"},'"#f44336"'),s(`
    `),t("span",{class:"hljs-attr"},"inactive-color"),s("="),t("span",{class:"hljs-string"},'"#e99eb4"'),s(`
  >`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(),t("span",{class:"hljs-attr"},"active-icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(),t("span",{class:"hljs-attr"},"current-icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"inactive-icon"),s("="),t("span",{class:"hljs-string"},'"heart-half-full"'),s(">")]),s(`
      Step1
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(),t("span",{class:"hljs-attr"},"active-icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(),t("span",{class:"hljs-attr"},"current-icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"inactive-icon"),s("="),t("span",{class:"hljs-string"},'"heart-half-full"'),s(">")]),s(`
      Step2
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(),t("span",{class:"hljs-attr"},"active-icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(),t("span",{class:"hljs-attr"},"current-icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"inactive-icon"),s("="),t("span",{class:"hljs-string"},'"heart-half-full"'),s(">")]),s(`
      Step3
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(),t("span",{class:"hljs-attr"},"active-icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(),t("span",{class:"hljs-attr"},"current-icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"inactive-icon"),s("="),t("span",{class:"hljs-string"},'"heart-half-full"'),s(">")]),s(`
      Step4
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-steps"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},S=t("h3",null,"Vertical Mode",-1),k=t("p",null,[s("Change the display direction of the step bar through the "),t("code",null,"direction"),s(" attribute.")],-1),x=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" active = ref("),t("span",{class:"hljs-number"},"0"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-steps"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"vertical"'),s(),t("span",{class:"hljs-attr"},":active"),s("="),t("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("Step1"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("Step2"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("Step3"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("Step4"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-steps"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w=p('<h2>API</h2><div class="card"><h3>Props</h3><h4>Steps Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>active</code></td><td>Active step</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>direction</code></td><td>Mode of steps, Can be set to <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>active-color</code></td><td>Active step color</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>inactive-color</code></td><td>Inactive step color</td><td><em>string</em></td><td><code>#9e9e9e</code></td></tr></tbody></table><h4>Step Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>active-icon</code></td><td>Active icon name</td><td><em>string</em></td><td><code>check</code></td></tr><tr><td><code>current-icon</code></td><td>Icon name of current ste</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>inactive-icon</code></td><td>Inactive icon name</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><h4>Steps Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>click-step</code></td><td>Emitted after click step</td><td><code>index: number</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><h4>Step Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content of step</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--step-tag-size</code></td><td><code>20px</code></td></tr><tr><td><code>--step-tag-background</code></td><td><code>#9e9e9e</code></td></tr><tr><td><code>--step-tag-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--step-tag-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--step-tag-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--step-tag-margin</code></td><td><code>4px 0</code></td></tr><tr><td><code>--step-tag-icon-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--step-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--step-content-color</code></td><td><code>rgba(0, 0, 0, 0.38)</code></td></tr><tr><td><code>--step-content-active-color</code></td><td><code>#000</code></td></tr><tr><td><code>--step-line-background</code></td><td><code>#000</code></td></tr><tr><td><code>--step-vertical-min-height</code></td><td><code>30px</code></td></tr><tr><td><code>--step-vertical-tag-margin</code></td><td><code>0 4px</code></td></tr><tr><td><code>--step-vertical-line-height</code></td><td><code>calc(100% - 30px)</code></td></tr><tr><td><code>--step-vertical-line-min-height</code></td><td><code>20px</code></td></tr></tbody></table></div>',5);function z(P,C,D,V,E,I){const a=c("var-site-code-example");return d(),r("div",h,[i,j,t("div",v,[m,g,e(a,null,{default:n(()=>[u]),_:1})]),t("div",f,[_,e(a,null,{default:n(()=>[b]),_:1})]),t("div",y,[S,k,e(a,null,{default:n(()=>[x]),_:1})]),w])}const A=l(o,[["render",z]]);export{A as default};
