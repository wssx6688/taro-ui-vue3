import{f as t,g as a,B as n}from"./common-03e26d29.js";const s='{"title":"Fab 浮动按钮","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"点击事件","slug":"点击事件"},{"level":2,"title":"Fab 参数","slug":"fab-参数"},{"level":2,"title":"Fab 事件","slug":"fab-事件"}],"relativePath":"docs/fab.md","lastUpdated":1608014139341.1304}';var e={};const l=n('<h1 id="fab-浮动按钮"><a class="header-anchor" href="#fab-浮动按钮" aria-hidden="true">#</a> Fab 浮动按钮</h1><hr><p>浮动操作按钮（FAB）代表着应用中最重要的操作，是为了使用户更便于操作。就像一个圆形的图标漂浮在界面上，它会在聚焦时改变颜色，在选中时改变海拔高度。按下时，它可能会包含更多相关的操作。</p><p>一个屏幕上建议只使用一个浮动操作按钮，它应该只代表最常见的操作。</p><blockquote><p>浮动操作按钮应该被放置在距离屏幕边框至少 16px 的地方</p></blockquote><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><p>在 Taro 文件中引入组件</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtFab <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n</code></pre></div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/fab.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>浮动按钮中的图标元素，请自行加上类名 <code>&quot;at-fab__icon&quot;</code></p><blockquote><p>浮动按钮默认不会脱离文档流，请自行包含一个父元素并设置 <code>fixed</code> 定位</p></blockquote><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtFab</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>at-fab__icon at-icon at-icon-menu<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtFab</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="点击事件"><a class="header-anchor" href="#点击事件" aria-hidden="true">#</a> 点击事件</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtFab</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onButtonClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>at-fab__icon at-icon at-icon-menu<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtFab</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="fab-参数"><a class="header-anchor" href="#fab-参数" aria-hidden="true">#</a> Fab 参数</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">size</td><td style="text-align:left;">大小尺寸</td><td style="text-align:left;">String</td><td style="text-align:left;"><code>normal</code>、<code>small</code></td><td style="text-align:left;"><code>normal</code></td></tr></tbody></table><h2 id="fab-事件"><a class="header-anchor" href="#fab-事件" aria-hidden="true">#</a> Fab 事件</h2><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">返回参数</th></tr></thead><tbody><tr><td style="text-align:left;">onClick</td><td style="text-align:left;">点击标签时触发</td><td style="text-align:left;">event 对象</td></tr></tbody></table>',20);e.render=function(n,s,e,p,o,c){return t(),a("div",null,[l])};export default e;export{s as __pageData};
