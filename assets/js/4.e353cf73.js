(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{322:function(a,s,t){a.exports=t.p+"assets/img/c001.6c9644ac.png"},323:function(a,s,t){a.exports=t.p+"assets/img/c002.65b04dce.png"},324:function(a,s,t){a.exports=t.p+"assets/img/c003.069f5384.png"},325:function(a,s,t){a.exports=t.p+"assets/img/c004.3a69c3fb.png"},326:function(a,s,t){a.exports=t.p+"assets/img/c005.fe8774f1.png"},340:function(a,s,t){"use strict";t.r(s);var e=t(33),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"redhat6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redhat6"}},[a._v("#")]),a._v(" RedHat6")]),a._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("为了撑场面，原封不动的抄了一份CentOS6的，没啥区别")])]),a._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("最重要的是，这些只发生在6版本😎")])]),a._v(" "),e("h2",{attrs:{id:"基础常用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础常用"}},[a._v("#")]),a._v(" 基础常用")]),a._v(" "),e("h3",{attrs:{id:"时间校准"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#时间校准"}},[a._v("#")]),a._v(" 时间校准")]),a._v(" "),e("p",[a._v("单点登录、加解密经常由于服务器时间不准出问题")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("ntpdate us.pool.ntp.org\n")])])]),e("p",[a._v("如果找不到时钟服务器，或者没办法yum，就直接打开北京时间手动对时")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" -s "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2020-04-15 14:15:00"')]),a._v("  \nclock -w\n")])])]),e("h3",{attrs:{id:"打包解包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包解包"}},[a._v("#")]),a._v(" 打包解包")]),a._v(" "),e("h4",{attrs:{id:"打包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[a._v("#")]),a._v(" 打包")]),a._v(" "),e("p",[a._v("把mubiao这个文件夹，打包成mubiao.tar")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -cvf mubiao.tar mubiao\n")])])]),e("p",[a._v("把file1 file2 dir1，打包成123.tar")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -cvf "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("123")]),a._v(".tar file1 file2 dir1\n")])])]),e("p",[a._v("压缩打包，酌情使用，一般也就文本类的压缩率高一些，并且这种打包很费时间")]),a._v(" "),e("p",[a._v("把aaa.txt   bbb.txt   ccc.txt打包压缩为一个名叫xxx.tar.gz 压缩包\nxvf: 解压缩")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zcvf xxx.tar.gz aaa.txt bbb.txt ccc.txt\n")])])]),e("h4",{attrs:{id:"解包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解包"}},[a._v("#")]),a._v(" 解包")]),a._v(" "),e("p",[a._v("普通解")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xvf mubiao.tar\n")])])]),e("p",[a._v("压缩包解包")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf apache-tomcat-7.0.75.tar.gz \n")])])]),e("h3",{attrs:{id:"rsync同步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rsync同步"}},[a._v("#")]),a._v(" rsync同步")]),a._v(" "),e("p",[a._v("碎文件、大文件使用这个命令可以断了续，续了断，比cp强一些")]),a._v(" "),e("p",[a._v("其余参数网上搜即可")]),a._v(" "),e("p",[a._v("注意一下带/和不带/有一点区别")]),a._v(" "),e("p",[a._v("同步之前")]),a._v(" "),e("p",[e("img",{attrs:{src:t(322),alt:"An image"}})]),a._v(" "),e("p",[a._v("src不带/,用这个命令同步之后")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rsync")]),a._v(" -a -H -v --progress --stats /bbsoft1/database /bbsoft2\n")])])]),e("p",[e("img",{attrs:{src:t(323),alt:"An image"}})]),a._v(" "),e("p",[a._v("src带/，用这个命令同步之后")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rsync")]),a._v(" -a -H -v --progress --stats /bbsoft1/database/ /bbsoft2\n")])])]),e("p",[e("img",{attrs:{src:t(324),alt:"An image"}})]),a._v(" "),e("h3",{attrs:{id:"防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[a._v("#")]),a._v(" 防火墙")]),a._v(" "),e("p",[a._v("重定向方案")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("iptables -t nat -A PREROUTING -p tcp -m tcp --dport "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" -j REDIRECT --to-ports "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8081")]),a._v("\niptables -t nat -A PREROUTING -p tcp -m tcp --dport "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v(" -j REDIRECT --to-ports "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8444")]),a._v("\niptables -A INPUT -p tcp -m state --state NEW -m tcp --dport "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" -j ACCEPT\niptables -A INPUT -p tcp -m state --state NEW -m tcp --dport "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8443")]),a._v(" -j ACCEPT\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" iptables save\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" iptables restart\n")])])]),e("h3",{attrs:{id:"环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[a._v("#")]),a._v(" 环境变量")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/profile\n")])])]),e("p",[a._v("打开后，例如我想配置个Java环境")]),a._v(" "),e("p",[a._v("那么在后面添加几句，wq即可")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/java/jdk1.8.0_131\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin:"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLASSPATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".:"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib/dt.jar:"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib/tools.jar\n")])])]),e("h3",{attrs:{id:"系统配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统配置"}},[a._v("#")]),a._v(" 系统配置")]),a._v(" "),e("p",[a._v("最合适的还是这两句")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" -n "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" /etc/issue \n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /proc/cpuinfo "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" name "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cut")]),a._v(" -f2 -d: "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("uniq")]),a._v(" -c\n")])])]),e("h3",{attrs:{id:"系统配置-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统配置-2"}},[a._v("#")]),a._v(" 系统配置")]),a._v(" "),e("p",[a._v("最合适的还是这两句")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" -n "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" /etc/issue \n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /proc/cpuinfo "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" name "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cut")]),a._v(" -f2 -d: "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("uniq")]),a._v(" -c\n")])])]),e("h3",{attrs:{id:"新建用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建用户"}},[a._v("#")]),a._v(" 新建用户")]),a._v(" "),e("p",[a._v("集群模式，最好都用一样的UID,这里意思就是创建一个uid为700的用户")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v(" -u "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("700")]),a._v(" bbuser\n")])])]),e("h3",{attrs:{id:"文件权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件权限"}},[a._v("#")]),a._v(" 文件权限")]),a._v(" "),e("p",[a._v("chown更改所有权")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" -R runoob:runoobgroup *\n")])])]),e("p",[a._v("chmod更改访问权\nr=4，可读；w=2，可写；x=1, 可执行")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("761")]),a._v(" test.sh\n")])])]),e("p",[a._v("执行后，代表当前用户对这个文件有所有权限，当前用户的组没有执行权限，其他用户只有执行权限")]),a._v(" "),e("p",[a._v("工作中，一般Nas存储777出现的比较多，其余777的情况谨慎使用")]),a._v(" "),e("h3",{attrs:{id:"结束进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结束进程"}},[a._v("#")]),a._v(" 结束进程")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -ef "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" tomcat\n")])])]),e("p",[a._v("查出来后，找到第二列的PID")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" -9 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4394")]),a._v("\n")])])]),e("p",[a._v("-9比较有效，直接shutdown,生产平台慎用")]),a._v(" "),e("h3",{attrs:{id:"wc计数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wc计数"}},[a._v("#")]),a._v(" wc计数")]),a._v(" "),e("p",[a._v("一般wc -l用得较多，主要统计返回结果行数，例如查有几个文件")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("ll "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("wc")]),a._v(" -l\n")])])]),e("p",[e("img",{attrs:{src:t(325),alt:"An image"}})]),a._v(" "),e("p",[a._v("total、test、test.txt 一共三行，所以返回结果是3")]),a._v(" "),e("h3",{attrs:{id:"grep条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grep条件"}},[a._v("#")]),a._v(" grep条件")]),a._v(" "),e("p",[a._v("或条件，-E参数使用")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("ll "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" -E "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'f|k'")]),a._v("\n")])])]),e("p",[a._v("与条件多个grep即可")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("ll "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" k "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" f \n")])])]),e("p",[e("img",{attrs:{src:t(326),alt:"An image"}})]),a._v(" "),e("h3",{attrs:{id:"全局查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局查询"}},[a._v("#")]),a._v(" 全局查询")]),a._v(" "),e("p",[a._v("一般情况下，知道某个字符，想全局查一下在哪里出现")]),a._v(" "),e("p",[a._v("这个递归查询命令，比较实用")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" -rn "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'8443'")]),a._v(" *\n")])])]),e("p",[a._v("或者指定文件类型")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" -rn "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'8443'")]),a._v(" *.properties\n")])])]),e("h3",{attrs:{id:"telnet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#telnet"}},[a._v("#")]),a._v(" telnet")]),a._v(" "),e("p",[a._v("这个命令也非常实用，如果想判断当前的网络环境是否能接通目的业务，那么这个最合理")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("telnet "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.22 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1521")]),a._v("\n")])])]),e("p",[a._v("如果命令通了，那么则证明1521端口不但开通了，并且有服务注册在了1521端口上")]),a._v(" "),e("h3",{attrs:{id:"端口使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#端口使用"}},[a._v("#")]),a._v(" 端口使用")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" -anp "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("61616")]),a._v("\n")])])]),e("p",[a._v("一般拿这个统计端口并发，效果甚佳")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" -anp "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("wc")]),a._v(" -l\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);