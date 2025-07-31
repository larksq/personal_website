
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className="p-8 bg-slate-950/50 border border-slate-800 rounded-xl shadow-lg">
      <div className="prose prose-invert prose-p:text-slate-300 prose-p:leading-relaxed max-w-none space-y-4 text-base">
        <p>
          AI目前是所有学科领域中发展最快的领域之一，全球最顶尖的人才和资本都在大量投入到相关的关键问题之中，重大突破层出不穷。在这样一个快速更新的领域，每一个
          人都享有相对比较平等的机会，大家离最前沿的未知科学和工程问题从未如此之近，你们都是充满了好奇心的年轻探险家！
        </p>
        <p>
          这门课将为你们提供一张在脑子里的地图，你将收获一个类比AI方向PhD同等级别的high-level mindset （如何思考）、intuition （直觉） & taste （选择什么值得投入时
          间），AIF-I和II相比于后续ML和DL更侧重于应用的Engineering的知识。
        </p>
        <p>
          在第一个部分中，我们需要通过探索行业内大家都在研究哪些关键问题，有哪些共识和分歧来入门。之后我们会动手自己实现和应用一下最新的技术，通过实践建立属于你
          自己的认知，之后我们将会通过同学与同学，同学与老师，同学与学术界和行业内一线大佬的交流中进一步更新和沉淀，最后呢大家将有机会通过一个项目来尝试提出解决
          你感兴趣的问题的解决方案。
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
