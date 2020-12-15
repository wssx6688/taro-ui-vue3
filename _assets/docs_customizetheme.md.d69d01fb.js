import{f as s,g as n,B as a}from"./common-03e26d29.js";const e='{"title":"自定义主题","frontmatter":{},"headers":[{"level":2,"title":"SCSS 主题变量覆盖","slug":"scss-主题变量覆盖"},{"level":2,"title":"全局样式类","slug":"全局样式类"}],"relativePath":"docs/customizetheme.md","lastUpdated":1608014139199.4917}';var o={};const t=a('<h1 id="自定义主题"><a class="header-anchor" href="#自定义主题" aria-hidden="true">#</a> 自定义主题</h1><hr><p>Taro UI Vue3 目前只有一套默认的主题配色，为满足业务和品牌上多样化的视觉需求，UI 库支持一定程度的样式定制。（请确保微信基础库版本在 v2.2.3 以上）</p><p>目前支持三种自定义主题的方式，可以进行不同程度的样式自定义：</p><ul><li>SCSS 变量覆盖</li><li>globalClass 全局样式类</li><li>配置 style 属性</li></ul><blockquote><p>请确保微信基础库版本在 v2.2.3+，具体原因请查看官方文档 <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html" target="_blank" rel="noopener noreferrer">微信小程序组件样式说明</a></p></blockquote><h2 id="scss-主题变量覆盖"><a class="header-anchor" href="#scss-主题变量覆盖" aria-hidden="true">#</a> SCSS 主题变量覆盖</h2><p>Taro UI Vue3 的组件样式是使用 SCSS 编写的，如果你的项目中也使用了 SCSS，那么可以直接在项目中改变 Taro UI Vue3 的样式变量。</p><p>新建一个主题样式文件，例如 <code>custom-variables.scss</code>，并写入以下内容：（如有需要，可使用<a href="https://nervjs.github.io/taro-ui-theme-preview/" target="_blank" rel="noopener noreferrer">自定义主题生成器</a>）</p><div class="language-scss"><pre><code><span class="token comment">/* 改变主题变量，具体变量名可查看 taro-ui/dist/style/variables/default.scss 文件 */</span>\n<span class="token property"><span class="token variable">$color-brand</span></span><span class="token punctuation">:</span> #6190E8<span class="token punctuation">;</span>\n\n<span class="token comment">/* 引入 Taro UI 默认样式 */</span>\n<span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/index.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><blockquote><p>覆写的变量，需要在引入 <code>taro-ui-vue3</code> 默认样式之前定义，<a href="https://github.com/b2nil/taro-ui-vue3/blob/master/src/style/variables/default.scss" target="_blank" rel="noopener noreferrer">默认主题变量命名</a></p></blockquote><p>之后在项目的入口文件中引入以上的样式文件即可（无需重复引入组件的默认样式）</p><div class="language-typescript"><pre><code><span class="token comment">/* app.js */</span>\n<span class="token keyword">import</span> <span class="token string">&#39;./custom-variables.scss&#39;</span>\n</code></pre></div><blockquote><p><strong>P.S. Slider, Switch 组件暂时不支持 SCSS 变量覆盖的方式自定义主题</strong></p></blockquote><h2 id="全局样式类"><a class="header-anchor" href="#全局样式类" aria-hidden="true">#</a> 全局样式类</h2><p>全局样式类是微信小程序定义的一套用于修改组件内部样式的方案。如果希望组件外样式类能够影响组件内部，可以在组件构造器中的 <code>options.addGlobalClass</code> 字段设置为 true（Taro UI Vue3 的组件均开启了此特性）。这个特性从小程序基础库版本 <code>2.2.3</code> 开始支持。</p><p><strong>P.S. <code>addGlobalClass</code> 这个 API 只对 Page 上的 class 起作用。换言之，如果在自定义的组件中使用 <code>taro-ui-vue3</code>，是无法在自定义组件内部通过 <code>全局样式类</code> 的方式去更改组件样式的。</strong></p><blockquote><p>当开放了全局样式类，存在外部样式无意间污染组件样式的风险。由于 Taro UI Vue3 的组件样式采用 BEM 的命名方式，从一定程度上避免了样式污染的问题。</p></blockquote><div class="language-typescript"><pre><code><span class="token comment">/* page/index/index.jsx   */</span>\n<span class="token keyword">import</span> Taro <span class="token keyword">from</span> <span class="token string">&#39;@tarojs/taro&#39;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> AtButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n\n<span class="token keyword">import</span> <span class="token string">&quot;./index.scss&quot;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> \n  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>AtButton <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&#39;my-button&#39;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="language-scss"><pre><code><span class="token comment">/**\n * page/index/index.scss 必须在 Page 上\n * .at-button 为组件内部类名，只需要写一样的类名去覆盖即可，但需要注意层级问题。（使用方式跟传统 CSS 一样）\n **/</span>\n<span class="token selector">.my-button.at-button </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',20);o.render=function(a,e,o,p,r,c){return s(),n("div",null,[t])};export default o;export{e as __pageData};
