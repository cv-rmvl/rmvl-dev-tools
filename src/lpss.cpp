#include <rmvl/lpss/node.hpp>

using namespace rm;

class LpssInfo : public lpss::async::Node {
public:
    LpssInfo() : Node("lpss_info") {}
};

int main() {
    LpssInfo nd{};
    nd.spin();
}