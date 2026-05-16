# APPROVAL ESCALATION MATRIX

This matrix correlates the autonomous payload risk with the required human authority role.

| Infrastructure Payload Pattern | Calculated Risk Tier | Required Authority | Auto-Timeout Behavior |
| :--- | :--- | :--- | :--- |
| `terraform apply` | High Risk | SecOps / CAB | Reject after 30 mins |
| `kubectl delete` | High Risk | SecOps / CAB | Reject after 30 mins |
| `aws ec2 terminate` | High Risk | SecOps / CAB | Reject after 30 mins |
| `npm publish` | High Risk | Lead Engineer | Reject after 60 mins |
| `git push origin main` | Medium Risk | Code Owner | Reject after 12 hours |
| `npm install <pkg>` | Medium Risk | Code Owner | Reject after 12 hours |
| `docker build` | Low Risk | Auto-Approve | N/A |
| `git commit -m` | Low Risk | Auto-Approve | N/A |

### Escalation Overrides
During Sev-1 incidents, the `execution-authority-policy.yaml` can be temporarily switched to `enforcement_mode: AUDIT` to allow agents to deploy rapid remediations without waiting for human CAB tokens. This must be reverted immediately after incident resolution.
