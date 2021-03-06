# fibos简介

## 什么是EOS？

### EOS 项目

EOS (Enterprise Operation System)是由 Block.one公司主导开发的一种全新的基于区块链智能合约平台，旨在为高性能分布式应用提供底层区块链平台服务。EOS 项目的目标是实现一个类似操作系统的支撑分布式应用程序的区块链架构。该架构可以提供账户，身份认证，数据库，异步通信以及可在数以万计的 CPU/GPU群集上进行程序调度和并行运算。EOS最终可以支持每秒执行数百万个交易，同时普通用户执行智能合约无需支付使用费用。 
 

### EOS的功能：

EOS代币目前是EOS区块链基础设施发布的基于以太坊的代币，主要有三大应用场景：带宽和日志存储(硬盘)，计算和计算储备(CPU)，状态存储(RAM)。EOS主网上线后会将ERC20代币EOS转换为其主链上的代币。

（延伸阅读：《OTCBTC 关于支持 EOS 映射的说明》）

具体可解释为：

1. 接收方支付： 客户从该业务中购买特定产品，而这些产品的销售收入将用于支付业务成本，避免客户直接为使用区块链支付费用，也不会限制或阻止企业确定其产品的货币化策略。

2. 授权能力：如果一个区块链是基于 EOS 软件系统开发，而其代币是由一个代币持有者所持有，他可能不需要立即消耗全部或部分可用带宽，这样的代币持有者可以选择将未消耗的带宽给予或租给他人。

3. 将交易成本与代币价值分开：如果应用程序所有者持有相应数量的代币，那么应用程序可以在固定的状态和带宽使用中持续运行。开发人员和用户不会受到代币市场价格波动的影响，因此不会依赖于价格。

4.区块奖励：每次生成一个区块时，EOS都会奖励该区块生产者新的代币用于支付其运维成本。目前EOS设定限制了区块生产者所得奖励上限，目前EOS设定给予区块生产者的奖励上限为每年最多5%，即代币新增供应的年总增长不超过5%。

## FIBOS 是什么？
FIBOS 是一个结合 FIBJS 以及 EOS 的 JavaScript 的运行平台，它使得 EOS 提供可编程性，并允许使用 JavaScript 编写智能合约。

FIBOS 平台的出现让第三代 EOS 智能合约编程变得简单、快捷!

### 为什么要创造 FIBOS ？

1. 目前 EOS 的环境部署困难

EOS 的编译环境依赖性强，编译过程时常遇到很多问题，对于普通一个开发者来说，大多数面对 CMake 的情况是束手无策的。

而 FIBOS 提供一套预编译开发环境，开发者可以快速实现部署，把更多的时间用在编写智能合约上。

2. 开发门槛高

编写 EOS 智能合约需要掌握 C++ 语言，这对于一名开发者来说学习成本非常高，并且我们认为正确的写出编译合约的 CMAKELISTS.TXT 才是刚刚开始!

而对于 FIBOS 来说，开发者可以使用 JavaScript 脚本语言进行编写智能合约，而这门语言学习成本很低。

对于一名开发者来说，如果一件事情简单容易，我们认为他们会更容易接受，并渴望了解 FIBOS。

3. 测试套件原始

EOS 的测试用例编写也必须使用 C++，高难度的语言学习，高难度的编译，使得测试这件事在 EOS 上面变得复杂、困难。

FIBOS 集成 FIBJS 服务端开发平台，拥有成熟的测试套件，在 FIBOS 平台上编写的用例，开发者可以使用 JavaScript 编写测试用例，这一切看起来非常的灵活、轻松!

4. EOS 迭代周期长

一个 EOS 智能合约要想成功部署发布，需要经过编写、编译、部署、测试、调试、修复，漫长的等待过程。

FIBOS 支持本地合约模式，随时修改随时测试，结合一些 IDE 工具可以做到一键研发测试。

5. 开发生态原始

EOS 使用 C++ 参与编写研发，并不能做到 NPM 这样的生态环境，而 FIBOS 支持 NPM 包管理，与庞大的 NPM 生态紧密连接。

6. 部署发布合约成本高

EOS 编写合约需要让 C++ 代码编译到 WASM，而 WASM 编译文件非常庞大，让发布部署运行合约成本非常高昂。

FIBOS 编写的合约可以通过打包脚本，压缩文件极大的降低部署发布成本。

7. 合约不可审计

EOS 合约编译成 WASM 后，对审计阅读合约代码带来了极大的困难，开发者无法评估合约的安全性。

FIBOS 的合约使用 JavaScript 编写并且全部开源，方便社区审计，迅速形成共识。

### 社区

website: https://fibos.io

telegram: https://t.me/FIBOSIO

twitter: https://twitter.com/fibos_io

medium: https://medium.com/@fibosio

issue: https://github.com/fibosio/fibos/issues